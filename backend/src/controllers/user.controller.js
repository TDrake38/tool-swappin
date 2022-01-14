const User = require('../models/user.model');

module.exports.getAll = async (req, res) => {
    res.json(await User.findAll());
}

module.exports.createUser = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, process.env.TOOL_SWAPPIN_SALT)
        const user = { "name": req.body.name, "password": hashedPassword }
        users.creUser(user)
        res.status(201).send()
    } catch {
        res.status(500).send()
    }
}