const Tool = require('../models/tools.model');
const jwt = require('jsonwebtoken')

// this is a test to see if I can find a user.
module.exports.findTools = async (req, res) => {
    res.json(await Tool.findAll());
}

module.exports.getTools = async (req, res) => {
    //This alone will return all the tools with the same owner_id
    res.json(await Tool.findTool(req.body.ownerID));
    //console.log(tool)

    // if (tool == null) {
    //     return res.status(400).send('Cannot find tool')
    // }
    // try {
    //     const authenticate = await checkIsAuthenticated();
    //     res.json(await authenticate);
    // } catch (e) {
    //     console.log(e)
    //     res.status(500).send()
    // }
}

//This finds a tool by ID
// module.exports.specificTool = async (req, res) => {
//     res.json(await Tool.oneTool(req.body.toolID))
// }


//This is where we are going to test if Kyle has this tool in his JWT??
module.exports.specificTool = async (req, res) => {
    res.json(await Tool.oneTool(req.body.toolID))
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
        res.json(await Tool.deleteTool(req.body.toolName))
        console.log('tool deleted')
    } catch (e) { 
        console.error(e)
        res.status(500).send()
    }
}

const checkIsAuthenticated = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, use) => {
        if (err) return res.sendStatus(403)
        req.use = use
        next()
    })
}
