const { getAll, createUser, find, deleteUser, user, findUser, getList, getContacts, editPhoto} = require('../controllers/user.controller');

const registerUsers = (app) => { 
    app.get('/users', getAll);
    app.post('/editPhoto', editPhoto)
    app.get('/contacts', getContacts);
    app.get('/list', getList);
    app.post('/register', createUser);
    app.get('/currentUser', find);
    app.get('/users/:id', findUser)
    app.get('user', user)
    app.delete('/delete', deleteUser)
};

module.exports = registerUsers;

