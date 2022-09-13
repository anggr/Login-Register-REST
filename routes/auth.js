const routes = require('express').Router()

routes.get('/login', (req, res) => {
    res.send('halaman login')
})

routes.get('/register', (req, res) => {
    res.send('halaman register')
})

routes.post('/login', (req, res) => {
    res.send('halaman logic login')
})

routes.post('/', (req, res) => {
    res.send('logic register')
})

module.exports = routes