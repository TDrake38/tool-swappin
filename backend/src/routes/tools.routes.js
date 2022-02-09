const { findTools, createTool, deleteTool, getTools, specificTool, checkIsAuthenticated} = require('../controllers/tools.controller');

const registerTool = (app) => { 
    console.log('tool works')
    app.get('/findTool', findTools)
    app.post('/createTool', createTool)
    app.delete('/deleteTool/post/:id', checkIsAuthenticated, deleteTool)
    app.get('/getTools', getTools)
    app.get('/oneTool', specificTool)
};

module.exports = registerTool;
