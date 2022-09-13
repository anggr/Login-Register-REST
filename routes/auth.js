const routes = require('express').Router()
const { viewLogin, viewRegister, login, register } = require('../controllers/authController')

routes.get('/login', viewLogin)

routes.get('/register', viewRegister)

routes.post('/login', login)

routes.post('/register', register)

module.exports = routes