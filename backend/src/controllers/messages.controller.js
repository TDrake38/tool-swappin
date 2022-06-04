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
        console.log(await Messages.createMessage(req.body.text, req.user.id, req.params.id))
    } catch (e) { 
        console.error(e)
        res.status(500).send()
    }
}

module.exports.deleteMessage = async (req, res) => {
    
    try {
        const message = await Messages.getById(req.params.id)
        if (message === undefined) return res.sendStatus(404)
        if (req.user.id !== message.id_sender){
            console.log("userID;" + parseInt(req.user.id, 10), message)
            res.status(401).send()
            //console.log('No match')
        } else {
            res.json(await Messages.deleteMessage(req.params.id))
            console.log("Match, messaged deleted")
        }
    } catch (e) { 
        console.error(e)
        res.status(500).send()
    }
}


