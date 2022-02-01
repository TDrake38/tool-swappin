const Tool = require('../models/tools.model');

// this is a test to see if I can find a user.
module.exports.findTools = async (req, res) => {
    res.json(await Tool.findAll());
}
