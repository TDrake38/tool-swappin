const { getAll, createUser, find, deleteUser, user, findUser} = require('../controllers/user.controller');

const registerUsers = (app) => { 
    app.get('/users', getAll);
    app.post('/users', createUser);
    app.get('/currentUser', find);
    app.get('/users/:id', findUser)
    app.get('user', user)
    app.delete('/delete', deleteUser)
};

module.exports = registerUsers;

