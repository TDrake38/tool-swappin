const { findMessages, createMessage, deleteMessage} = require('../controllers/messages.controller');


const messages = (app) => { 
    app.get('/findMessage', findMessages)
    app.post('/createMessage', createMessage)
    app.delete('/deleteMessage/:id', deleteMessage)
};

module.exports = messages;