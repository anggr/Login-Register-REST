const routes = require('express').Router();
const { viewHome } = require('../controllers/homepageController');

routes.get('/', viewHome)

module.exports = routes;