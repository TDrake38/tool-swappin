const { getAll, createUser, token, login, logout } = require('../controllers/user.controller');

const registerUsers = (app) => { console.log()
    app.get('/users', getAll);
    app.post('/users', createUser);
    app.post('/token', token);
    app.post('/login', login);
    app.delete('/logout', logout);
};

module.exports = registerUsers;

