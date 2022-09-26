const { user_game, user_game_biodata } = require('../models')
const passport = require('../lib/passport-local')

module.exports = {
    viewLogin: (req, res) => {
        res.render('login')
    },
    viewRegister: (req, res) => {
        res.render('register')
    },
    login: passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/login',
        failureFlash: true // Untuk mengaktifkan express flash
    }),
    register: (req, res) => {
        let { username, password, firstName, lastName, birthplace } = req.body
        user_game.register({ username, password })
            .then(user_game => {
                user_game_biodata.create({
                    id_user: user_game.id,
                    first_Name: firstName,
                    last_Name: lastName,
                    birthplace
                }).then(response => {
                    res.redirect('/login')
                })
            })
    }
}