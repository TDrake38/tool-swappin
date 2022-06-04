const { getMessages, createMessage, deleteMessage} = require('../controllers/messages.controller');


const messages = (app) => { 
    app.get('/messages/:id', getMessages)
    app.post('/messages/:id', createMessage)
    //probably don't need this. It will probably be just delete all msgs/for a chat 
    app.delete('/message/:id', deleteMessage)
};

module.exports = messages;