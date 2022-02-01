const { findTools, createTool, deleteTool } = require('../controllers/tools.controller');


const registerTool = (app) => { 
    console.log('tool works')
    app.get('/findTool', findTools)
    app.post('/createTool', createTool)
    app.delete('/deleteTool', deleteTool)
};

module.exports = registerTool;
