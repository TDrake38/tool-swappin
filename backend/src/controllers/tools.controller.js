const Tool = require('../models/tools.model');

// this is a test to see if I can find a user.
module.exports.findTools = async (req, res) => {
    res.json(await Tool.findAll());
}

module.exports.getTools = async (req, res) => {
    //This alone will return all the tools with the same owner_id
    res.json(await Tool.findTool(req.body.ownerID));
    //console.log(tool)
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

module.exports.deleteTool = async (req, res) => {
    
    try {
        const tool = await Tool.oneTool(req.params.id)
        if (tool === undefined) return res.sendStatus(404)
        if (parseInt(req.user.id, 10) !== tool.owner_id){
            res.status(401).send()
            console.log('No match')
        } else {
            res.json(await Tool.deleteTool(req.params.id))
            console.log("Match, tool deleted")
        }
    } catch (e) { 
        console.error(e)
        res.status(500).send()
    }
}


