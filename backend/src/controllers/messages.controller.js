const Messages = require('../models/messages.model');

module.exports.getMessages = async (req, res) => {
    //This alone will return all the messages with the same owner_id
    res.json(await Messages.getMessagesByUserId(req.user.id, req.params.id));
    //console.log(await Messages.getMessagesByUserId(req.user.id, req.params.id))
}

//who made it
module.exports.createMessage = async (req, res) => {
    try {
        res.json(await Messages.createMessage(req.body.text, req.user.id, req.params.id)).send()
        //console.log(await Messages.createMessage(req.body.text, req.user.id, req.params.id))
        console.log(req.body)
    } catch (e) { 
        console.error(e)
        res.status(500).send()
    }
}

module.exports.deleteMessages = async (req, res) => {
    try {
        res.json(await Messages.deleteConversation(req.user.id, req.params.id))
        console.log("Convo Deleted")
    } catch (e) {
        console.error(e)
        res.status(500).send()
    }
}


