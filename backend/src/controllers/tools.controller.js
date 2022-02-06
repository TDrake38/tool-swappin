const Tool = require('../models/tools.model');

// this is a test to see if I can find a user.
module.exports.findTools = async (req, res) => {
    res.json(await Tool.findAll());
}

//who made it
module.exports.createTool = async (req, res) => {
    try {
        res.json(await Tool.createTool(req.body.toolName, req.body.available, req.body.ownerID)).send()
        console.log('tool created')
    } catch (e) { 
        console.error(e)
        res.status(500).send()
    }
}

//access control
module.exports.deleteTool = async (req, res) => {
    try {
        res.json(await Tool.deleteTool(req.body.id))
        console.log('tool deleted')
    } catch (e) { 
        console.error(e)
        res.status(500).send()
    }
}
