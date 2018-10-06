'use strict';

const _ = require('lodash');
const Category = require('./category.model');
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

// Get list of categorys
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

    let categorys = await Category.find(query, null, options);
    let categoryCount = await Category.count(query);
    const response = {
      "metadata": {
        "resultset": {
          "pages": Math.ceil(categoryCount / pageSize),
          "page": page,
          "pageSize": pageSize,
          "sorted": defSort,
          "filtered": req.query.filtered,
          "sortDesc": sortDesc,
        }
      },
      "results": categorys
    }

    return res.status(200).json(response);

  } catch(err) {
    console.log('Categorys Index: Error - ', err);
    return res.status(500);
  }

};

// Get a single category
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
    let category = await Category.findOne(options);
    if(!category) { return handle404(res); }
    return res.json(category);
  } catch (err) {
    console.log('Categorys show: Error - ', err);
    return handleError(res, err);
  }
};

// Creates a new category in the DB
exports.create = async (req, res) => {
  try {
    var newCategory = new Category(req.body);

    let category = await Category.create(newCategory);
    return res.status(201).json(category);
  } catch(err) {
    console.log('Categorys create: Error - ', err);
    return handleError(res, err);    
  }
};

// Updates an existing category in the DB
exports.update = async (req, res) => {
  try {
    let data = {...req.body};
    if (data._id) { delete data._id; }

    var category = await Category.findByIdAndUpdate(req.params.id, {$set:data}, {
        runValidators:true,
      })
      .exec();

    return res.status(200).json(category);
  } catch(err) {
    console.log('Categorys update: Error - ', err);
    return handleError(res, err);    
  }
};

// Deletes a category from the DB
exports.destroy = async (req, res) => {
  try {
    var category = await Category.findById(req.params.id);
    if (!category) {
      return handle404(res); 
    }
    await category.remove();
    return res.sendStatus(204);
  } catch(err) {
    console.log('Categorys destroy: Error - ', err);
    return handleError(res, err);    
  }
};