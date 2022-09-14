const express = require('express')
const app = express()
const port = 3000
const authRoutes = require('./routes/auth')
const homeRoutes = require('./routes/home')

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

app.use(authRoutes)
app.use(homeRoutes)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})