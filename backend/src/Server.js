// Server stuff
const { config } = require('dotenv');
config();

const express = require('express')
const app = express()

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

app.use(express.json())

const users = []

const posts = [
    {
        "username": 'Jim',
        "title": 'Post 1'
    },
    {
        "username": 'Beem',
        "title": 'Post 2'
    }
]

app.get('/posts', authenticateToken, (req, res) => {
    res.json(posts.filter(post => post.username === req.use.name))
})


function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, use) => {
        if (err) return res.sendStatus(403)
        req.use = use
        next()
    })
}

app.listen(3000)
