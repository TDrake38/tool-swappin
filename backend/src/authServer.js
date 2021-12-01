// Server stuff
const { config } = require('dotenv');
config();

const express = require('express')
const app = express()

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

app.use(express.json())

const users = []

app.get('/users', (req, res) => {
    res.json(users)
})

app.post('/users', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const user = { "name": req.body.name, "password": hashedPassword }
        users.push(user)
        res.status(201).send()
    } catch {
        res.status(500).send()
    }
})

app.post('/users/login', async (req, res) => {
    const user = users.find(user => user.name = req.body.name)
    if (user == null) {
        return res.status(400).send('Cannot find user')
    }
    try {
      if ( await bcrypt.compare(req.body.password, user.password)) {
        res.send('Success')
      } else {
        res.send('Not Allowed')
      }
    }
    catch {
        res.status(500).send()
    }
})

app.post('/log', (req, res) => {
    const username = req.body.username
    const use = { "name": username }

    const accessToken = jwt.sign(use, process.env.ACCESS_TOKEN_SECRET)
    res.json({ "accessToken": accessToken })
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

app.listen(4000)
