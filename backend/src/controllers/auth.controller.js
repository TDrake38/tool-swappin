const User = require('../models/user.model');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

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
        try { 
          if ( await bcrypt.compare(req.body.password, user.passwords)) {
            const username = req.body.username
            const jwtData = { username: username, id: user.id }
            const accessToken = generateAccessToken(jwtData)
            //const refreshToken = jwt.sign(use, process.env.REFRESH_TOKEN_SECRET)
            //refreshTokens.push(refreshToken)
            res.json({ accessToken: accessToken/*, "refreshToken": refreshToken */})
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

module.exports.checkIsAuthenticated = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) return res.sendStatus(403)
      req.user = user
      next()
  })
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
