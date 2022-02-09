const User = require('../models/user.model');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// module.exports = (app, checkIsAuthenticated) => {
//     app.get("/users", checkIsAuthenticated, getAll);
//     // why do I have app.get/users with getAll twice?? 
//     app.get("/users", getAll);
// }

// function checkIsAuthenticated (req, res, next) {
//     const authHeader = req.headers['authorization']
//     const token = authHeader && authHeader.split(' ')[1]
//     if (token == null) return res.sendStatus(401)

//     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, use) => {
//         if (err) return res.sendStatus(403)
//         req.use = use
//         next()
//     })
// }

const generateAccessToken = (use) => {
    return jwt.sign(use, process.env.ACCESS_TOKEN_SECRET /*{"expiresIn": '10m'}*/)
}

module.exports.login = async (req, res) => {
    console.log(req.body)
    // this searches an array and I need to make it look in the database
    const user = await User.findUser(req.body.username)//(user => user.name = req.body.name)
    console.log(user)
        if (user == null) {
            return res.status(400).send('Cannot find user')
        }
        try { //console.log(req.body.password, user.passwords)
          if ( await bcrypt.compare(req.body.password, user.passwords)) {
            const username = req.body.username
            const use = { "user_name": username }
    
            const accessToken = generateAccessToken(use)
            //const refreshToken = jwt.sign(use, process.env.REFRESH_TOKEN_SECRET)
            //refreshTokens.push(refreshToken)
            res.json({ "accessToken": accessToken/*, "refreshToken": refreshToken */})
            res.json(use.rows)
          } else {
            res.send('Not Allowed')
          }
        }
        catch (e) {
            console.log(e)
            res.status(500).send()
        }
}

//make this a delete your token on your local browser
module.exports.logout = async (req, res) => {
    refreshTokens = refreshTokens.filter(token => token !== req.body.token)
        res.sendStatus(204)
}

// module.exports.token = async (req, res) => {
//     const refreshToken = req.body.token
//         if (refreshToken == null) return res.sendStatus(401)
//         if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403)
//         jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, use) => {
//             if (err) return res.sendStatus(403)
//             const accessToken = generateAccessToken({"name": use.name})
//             res.json({ "accessToken": accessToken })
//         })
// }
