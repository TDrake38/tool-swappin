const User = require('../models/user.model');

module.exports.getAll = async (req, res) => {
    res.json(await User.findAll());
}
