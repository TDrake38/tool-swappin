

module.exports.checkIsAuthenticated = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, use) => {
        if (err) return res.sendStatus(403)
        req.use = use
        next()
    })
}

function generateAccessToken(use) {
    return jwt.sign(use, process.env.ACCESS_TOKEN_SECRET, {"expiresIn": '10m'})
}
