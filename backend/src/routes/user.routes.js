const { getAll, createUser, find, deleteUser, user} = require('../controllers/user.controller');

const registerUsers = (app) => { 
    app.get('/users', getAll);
    app.post('/users', createUser);
    app.get('/findUser', find);
    app.get('user', user)
    app.delete('/delete', deleteUser)
};

module.exports = registerUsers;

