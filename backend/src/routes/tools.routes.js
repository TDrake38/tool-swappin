const { findTools, createTool, deleteTool, getTools } = require('../controllers/tools.controller');
const { checkIsAuthenticated } = require('../controllers/auth.controller')

const registerTool = (app) => { 
    app.get('/findTool', findTools)
    app.post('/createTool', createTool)
    app.delete('/deleteTool/:id', checkIsAuthenticated, deleteTool)
    app.get('/getTools', getTools)
};

module.exports = registerTool;
