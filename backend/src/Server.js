// Server stuff

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

app.get('/posts', (req, res) => {
    res.json(posts)
})

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

app.post('/login', async (req, res) => {
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

    const username = req.body.username
})

app.listen(3000)
