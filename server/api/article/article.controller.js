'use strict';

const _ = require('lodash');
const Article = require('./article.model');
const moment = require('moment');

const validationError = (res, err) => {
  const response = {
    "status": 422,
    "message": err.messsage
  };

  return res.status(422).json(response);
};

const handleError = (res, err) => {
  const response = {
    "status": 500,
    "message": err.message
  };

  return res.status(500).send(response);
}

const handle404 = (res) => {
  const response = {
    "status": 404,
    "message": "Sorry! Not found."
  };

  return res.status(404).send(response);
}
const handleBadRequest = (res) => {
  const response = {
    "status": 400,
    "message": "Bad Request."
  };

  return res.status(400).send(response);
}

// Get list of articles
exports.index = async (req, res) => {
  try {
    let page = 0;
    let pageSize = 20;
    let dateFilter = {};
    let query = {};

    if (req.query.page) {
      page = parseInt(req.query.page);
    }
    if (req.query.pageSize) {
      pageSize = parseInt(req.query.pageSize);  
      if (pageSize == 0) {
        pageSize = 20;
      }
    }

    let options = {skip: page * pageSize, limit: pageSize};
    let sortDesc = false;
    let defSort;
    if (req.query.sorted) {
      let sortOption = {};
      req.query.sorted.forEach((sortInfo) => {
        let op = JSON.parse(sortInfo);
        defSort = [op];
        sortOption[op.id] = op.desc === true ? 'desc' : 'asc';
        sortDesc = op.desc;
      })
      options.sort = sortOption;
    }

    let articles = await Article.find(query, null, options);
    let articleCount = await Article.count(query);
    const response = {
      "metadata": {
        "resultset": {
          "pages": Math.ceil(articleCount / pageSize),
          "page": page,
          "pageSize": pageSize,
          "sorted": defSort,
          "filtered": req.query.filtered,
          "sortDesc": sortDesc,
        }
      },
      "results": articles
    }

    return res.status(200).json(response);

  } catch(err) {
    console.log('Articles Index: Error - ', err);
    return res.status(500);
  }

};

// Get a single article
exports.show = async (req, res) => {
  try {
    let options = {};
    if (req.params.id) {
      options.id = req.params.id;
    } else if (req.params.slug) {
      options.slug = req.params.slug;
    } else {
      return handleBadRequest(res);
    }
    let article = await Article.findOne(options);
    if(!article) { return handle404(res); }
    return res.json(article);
  } catch (err) {
    console.log('Articles show: Error - ', err);
    return handleError(res, err);
  }
};

// Creates a new article in the DB
exports.create = async (req, res) => {
  try {
    var newArticle = new Article(req.body);

    let article = await Article.create(newArticle);
    return res.status(201).json(article);
  } catch(err) {
    console.log('Articles create: Error - ', err);
    return handleError(res, err);    
  }
};

// Updates an existing article in the DB
exports.update = async (req, res) => {
  try {
    let data = {...req.body};
    if (data._id) { delete data._id; }

    var article = await Article.findByIdAndUpdate(req.params.id, {$set:data}, {
        runValidators:true,
      })
      .exec();

    return res.status(200).json(article);
  } catch(err) {
    console.log('Articles update: Error - ', err);
    return handleError(res, err);    
  }
};

// Deletes a article from the DB
exports.destroy = async (req, res) => {
  try {
    var article = await Article.findById(req.params.id);
    if (!article) {
      return handle404(res); 
    }
    await article.remove();
    return res.sendStatus(204);
  } catch(err) {
    console.log('Articles destroy: Error - ', err);
    return handleError(res, err);    
  }
};