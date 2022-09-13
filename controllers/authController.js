module.exports = {
    viewLogin: (req, res) => {
        res.send('halaman login')
    },
    viewRegister: (req, res) => {
        res.send('halaman register')
    },
    login: (req, res) => {
        res.send('halaman logic login')
    },
    register: (req, res) => {
        res.send('logic register')
    }
}