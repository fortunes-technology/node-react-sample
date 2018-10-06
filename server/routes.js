/**
 * Main application routes
 */

'use strict';

const errors = require('./components/errors');

module.exports = (app) => {

  // Insert routes
  app.use('/api/authenticate', require('./auth'));
  app.use('/api/users', require('./api/user'));
  app.use('/api/articles', require('./api/article'));
  app.use('/api/categorys', require('./api/category'));

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
    .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get((req, res) => {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};
