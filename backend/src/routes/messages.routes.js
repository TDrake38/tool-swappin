const { findMessages, createMessage, deleteMessage} = require('../controllers/messages.controller');


const messages = (app) => { 
    app.get('/findMessage', findMessages)
    app.post('/createMessage', createMessage)
    //probably don't need this. It will probably be just delete all msgs/for a chat 
    app.delete('/deleteMessage/:id', deleteMessage)
};

module.exports = messages;