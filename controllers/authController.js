module.exports = {
    viewLogin: (req, res) => {
        res.render('login')
    },
    viewRegister: (req, res) => {
        res.render('register')
    },
    login: (req, res) => {
        res.send('halaman logic login')
    },
    register: (req, res) => {
        res.send('logic register')
    }
}