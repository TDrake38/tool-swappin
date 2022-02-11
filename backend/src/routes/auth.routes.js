const {login, logout, token} = require('../controllers/auth.controller');

const userAuth = (app) => {
    console.log('auth works')
    //app.post('/token', token);
    app.post('/login', login);
    app.delete('/logout', logout);
}

module.exports = userAuth;
