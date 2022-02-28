const {login, logout, token} = require('../controllers/auth.controller');

const userAuth = (app) => {
    app.post('/login', login);
    app.delete('/logout', logout);
}

module.exports = userAuth;
