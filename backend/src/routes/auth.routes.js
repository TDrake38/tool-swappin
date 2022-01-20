const {getAll} = require('../controllers/auth.controller');

// should this be in auth controller?
module.exports = (app, checkIsAuthenticated) => {
    app.get("/users", checkIsAuthenticated, getAll);
    // why do I have app.get/users with getAll twice?? 
    app.get("/users", getAll);
}