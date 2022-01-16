const {getAll} = require('../controllers/user.controller');

// should this be in auth controller?
module.exports = (app, checkIsAuthenticated) => {
    app.get("/users", checkIsAuthenticated, getAll);
    // why do I have app.get with getAll twice?? 
    app.get("/users", getAll);
}