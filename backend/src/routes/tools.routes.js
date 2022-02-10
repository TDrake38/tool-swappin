const { findTools, createTool, deleteTool, getTools, specificTool } = require('../controllers/tools.controller');
const { checkIsAuthenticated } = require('../controllers/auth.controller')

const registerTool = (app) => { 
    console.log('tool works')
    app.get('/findTool', findTools)
    app.post('/createTool', createTool)
    app.delete('/deleteTool/:id', checkIsAuthenticated, deleteTool)
    app.get('/getTools', getTools)
    app.get('/oneTool', specificTool)
};

module.exports = registerTool;
