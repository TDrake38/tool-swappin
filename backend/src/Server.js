const userRoutes = require('./routes/user.routes');

// Server stuff
const { config } = require('dotenv');
config();

const express = require('express')
const app = express()

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

app.use(express.json())

const users = []

function checkIsAuthenticated(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, use) => {
        if (err) return res.sendStatus(403)
        req.use = use
        next()
    })
}

userRoutes(app, checkIsAuthenticated);
// toolRoutes(app, checkIsAuthenticated);
// messagesRoutes(app, checkIsAuthenticated);

console.log("hello");
app.listen(3000)
