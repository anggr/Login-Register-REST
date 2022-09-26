const express = require('express')
const app = express()
const port = 3000
const authRoutes = require('./routes/auth')
const homeRoutes = require('./routes/home')
const session = require('express-session')
const flash = require('express-flash')

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

app.use(session({
    secret: 'Buat ini jadi rahasia',
    resave: false,
    saveUninitialized: false
}))

const passport = require('./lib/passport-local')
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())

app.use(authRoutes)
app.use(homeRoutes)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})