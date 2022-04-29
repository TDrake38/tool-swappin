const { getMessages, createMessage, deleteMessage} = require('../controllers/messages.controller');


const messages = (app) => { 
    app.get('/message', getMessages)
    app.post('/message', createMessage)
    //probably don't need this. It will probably be just delete all msgs/for a chat 
    app.delete('/message/', deleteMessage)
};

module.exports = messages;