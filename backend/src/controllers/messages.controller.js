const Messages = require('../models/messages.model');

// this is a test to see if I can find a user.
module.exports.findMessages = async (req, res) => {
    res.json(await Messages.findMessages());
}

module.exports.getMessage = async (req, res) => {
    //This alone will return all the tools with the same owner_id
    res.json(await Messages.findMessage(req.body.senderID));
    //console.log(tool)
}

//This is where we are going to test if Kyle has this tool in his JWT??
module.exports.specificMessage = async (req, res) => {
    res.json(await Messages.oneMessage(req.body.messageID))
}

//who made it
module.exports.createTool = async (req, res) => {
    try {
        res.json(await Tool.createTool(req.body.message, req.body.senderID, req.body.recipientID)).send()
        console.log('tool created')
    } catch (e) { 
        console.error(e)
        res.status(500).send()
    }
}

module.exports.deleteMessage = async (req, res) => {
    
    try {
        const message = await Messages.oneMessage(req.params.id)
        if (message === undefined) return res.sendStatus(404)
        if (parseInt(req.user.id, 10) !== message.owner_id){
            res.status(401).send()
            console.log('No match')
        } else {
            res.json(await Messages.deleteMessage(req.params.id))
            console.log("Match, messaged deleted")
        }
    } catch (e) { 
        console.error(e)
        res.status(500).send()
    }
}


