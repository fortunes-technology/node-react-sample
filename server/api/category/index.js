'use strict';

const express = require('express');
const controller = require('./category.controller');
const auth = require('../../auth/auth.service');
const router = express.Router();

/*
* user-authenticated area
*/

// get the list of category entries
router.get('/', controller.index);

// get the particular time entry
router.get('/:id', controller.show);
router.get('/slug/:slug', controller.show);

// create a new time entry
router.post('/', auth.hasRole('admin'), controller.create);

// update a time entry
router.put('/:id', auth.hasRole('admin'), controller.update);
router.patch('/:id', auth.hasRole('admin'), controller.update);

// delete a time entry
router.delete('/:id', auth.hasRole('admin'), controller.destroy);

module.exports = router;
