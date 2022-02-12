const { findMessage, createMessage, deleteMessage} = require('../controllers/tools.controller');
const { checkIsAuthenticated } = require('../controllers/auth.controller')

const messagesToo = (app) => { 
    console.log('messages work')
    app.get('/findMessage', findMessage)
    app.post('/createMessage', createMessage)
    app.delete('/deleteMessage/:id', checkIsAuthenticated, deleteMessage)
};

module.exports = messagesToo;