const {getAll} = require('../controllers/user.controller');

module.exports = (app, checkIsAuthenticated) => {
    // app.get("/users", checkIsAuthenticated, getAll);
    app.get("/users", getAll);
}