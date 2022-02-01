const { queryDB } = require('../db');

const Tool = function (tool) {
    this.id = tool.id;
}

Tool.findAll = async () => {
    const response = await queryDB('SELECT * FROM tools');
    return response.rows;
}

Tool.createTool = async (toolName, available) => {
    const createTool = await queryDB('INSERT INTO tools (name, availability) VALUES ($1, $2) RETURNING *', [toolName, available]);
    return createTool.rows;
}

// This deletes a user with ID. 
Tool.deleteTool = async (id) => {
    const deleteTool = await queryDB('DELETE FROM tools WHERE id = $1 RETURNING *', [id]);
    return deleteTool.rows;
};

module.exports = Tool;