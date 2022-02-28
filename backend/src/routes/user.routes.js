const { getAll, createUser, find, deleteUser} = require('../controllers/user.controller');

const registerUsers = (app) => { 
    app.get('/users', getAll);
    app.post('/users', createUser);
    app.get('/findUser', find);
    app.delete('/delete', deleteUser)
};

module.exports = registerUsers;

