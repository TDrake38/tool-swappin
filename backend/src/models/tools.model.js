const { queryDB } = require('../db');

const Tool = function (tool) {
    this.id = tool.id;
}

Tool.findAll = async () => {
    const response = await queryDB('SELECT * FROM tools');
    return response.rows;
}

module.exports = Tool;