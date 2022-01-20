const { getAll, createUser } = require('../controllers/user.controller');

const registerUsers = (app) => { 
    console.log('register works')
    app.get('/users', getAll);
    app.post('/users', createUser);
};

module.exports = registerUsers;

