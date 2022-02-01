const { findTools } = require('../controllers/tools.controller');


const registerTool = (app) => { 
    console.log('tool works')
    app.get('/findTool', findTools)
};

module.exports = registerTool;

