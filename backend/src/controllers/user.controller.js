const User = require('../models/user.model');
const bcrypt = require('bcrypt')

module.exports.getAll = async (req, res) => {
    res.json(await User.findAll());
}

module.exports.createUser = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, parseInt (process.env.TOOL_SWAPPIN_SALT, 10))
        res.json(await User.createUser(req.body.username, hashedPassword)).send()
        console.log('hey')
    } catch (e) { 
        console.error(e)
        res.status(500).send()
    }
}

