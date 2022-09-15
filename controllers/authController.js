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
        let { username, password, firstName, lastName, birthplace } = req.body
        // res.send('logic register')
        console.log(username, password, firstName, lastName, birthplace)
    }
}