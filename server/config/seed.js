/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
const User = require('../api/user/user.model');
const config = require('./environment');

module.exports = () => {
  if(config.seedDB) {
    User.find({}).remove()
      .then(() => {
        User.create({
            provider: 'local',
            role: 'admin',
            firstName: 'Admin',
            lastName: 'User',
            fullName: 'Admin User',
            email: 'admin@gmail.com',
            password: 'admin'
          })
          .then(() => console.log('finished populating users'))
          .catch(err => console.log('error populating users', err));
      });
  }
}
