const { findMessages, createMessage, deleteMessage} = require('../controllers/messages.controller');
const { checkIsAuthenticated } = require('../controllers/auth.controller')

const messages = (app) => { 
    app.get('/findMessage', findMessages)
    app.post('/createMessage', createMessage)
    app.delete('/deleteMessage/:id', checkIsAuthenticated, deleteMessage)
};

module.exports = messages;