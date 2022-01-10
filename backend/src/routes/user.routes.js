
const registerUsers = (app) => {
    app.get('/users', (req, res) => {
        res.json(users)
    });
    app.post('/users', async (req, res) => {
        try {
            const hashedPassword = await bcrypt.hash(req.body.password, process.env.TOOL_SWAPPIN_SALT)
            const user = { "name": req.body.name, "password": hashedPassword }
            users.push(user)
            res.status(201).send()
        } catch {
            res.status(500).send()
        }
    });
    app.post('/token', (req, res) => {
        const refreshToken = req.body.token
        if (refreshToken == null) return res.sendStatus(401)
        if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403)
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, use) => {
            if (err) return res.sendStatus(403)
            const accessToken = generateAccessToken({"name": use.name})
            res.json({ "accessToken": accessToken })
        })
    });
};


app.post('/users/login', async (req, res) => {
    const user = users.find(user => user.name = req.body.name)
    if (user == null) {
        return res.status(400).send('Cannot find user')
    }
    try {
      if ( await bcrypt.compare(req.body.password, user.password)) {
        const username = req.body.username
        const use = { "name": username }

        const accessToken = generateAccessToken(use)
        const refreshToken = jwt.sign(use, process.env.REFRESH_TOKEN_SECRET)
        refreshTokens.push(refreshToken)
        res.json({ "accessToken": accessToken, "refreshToken": refreshToken })
      } else {
        res.send('Not Allowed')
      }
    }
    catch {
        res.status(500).send()
    }
})

app.post('/token', (req, res) => {
    const refreshToken = req.body.token
    if (refreshToken == null) return res.sendStatus(401)
    if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403)
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, use) => {
        if (err) return res.sendStatus(403)
        const accessToken = generateAccessToken({"name": use.name})
        res.json({ "accessToken": accessToken })
    })
})

app.delete('/logout', (req, res) => {
    refreshTokens = refreshTokens.filter(token => token !== req.body.token)
    res.sendStatus(204)
})