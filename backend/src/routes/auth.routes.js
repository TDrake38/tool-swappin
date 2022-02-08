const {login, logout, token} = require('../controllers/auth.controller');

const userAuth = (app) => {
    console.log('auth works')
    //app.post('/token', token);
    app.post('/login', login);
    app.delete('/logout', logout);
}

module.exports = userAuth;

// // should this be in auth controller?
// module.exports = (app, checkIsAuthenticated) => {
//     app.get("/users", checkIsAuthenticated, getAll);
//     // why do I have app.get/users with getAll twice?? 
//     app.get("/users", getAll);
// }