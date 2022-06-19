const Tool = require('../models/tools.model');

// this is a test to see if I can find all tools
module.exports.findTools = async (req, res) => {
    console.log(await Tool.findAll());
    res.json(await Tool.findAll());
}

module.exports.getTools = async (req, res) => {
    //This alone will return all the tools with the same owner_id
    res.json(await Tool.findTool(req.user.id));
    //console.log(tool)
}

module.exports.toolSearch = async (req, res) => {
    console.log(await Tool.search(req.body.searchBar));
    res.json(await Tool.search(req.body.searchBar));
}

//TODO: find out why req.user.id wouldnt work and i had to change it back to INSERT not UPSERT req.body.ownerID
//TODO: area will not input using logged in user area
module.exports.createTool = async (req, res) => {
    console.log(req.body)
    try {
        res.json(await Tool.createTool(req.body.photo, req.body.toolName, req.body.area, req.user.id)).send()
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


