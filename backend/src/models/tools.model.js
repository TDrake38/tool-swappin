const { queryDB } = require('../db');

const Tool = {}

Tool.findAll = async () => {
    const response = await queryDB('SELECT * FROM tools');
    return response.rows;
}

Tool.findTool = async (ownerID) => {
    const findTool = await queryDB('SELECT * FROM tools WHERE owner_id = $1', [ownerID]);
    return findTool.rows;
}

//This is to query for a spesific tool
Tool.oneTool = async (toolID) => {
    const oneTool = await queryDB('SELECT * FROM tools WHERE id = $1', [toolID]);
    return oneTool.rows[0];
}

//TODO: Fill in owner_id as well 
Tool.createTool = async (toolName, available, ownerID) => {
    const createTool = await queryDB('INSERT INTO tools (name, availability, owner_id) VALUES ($1, $2, $3) RETURNING *', [toolName, available, ownerID]);
    return createTool.rows;
}

// This deletes a tool with ID. 
Tool.deleteTool = async (toolID) => {
    const deleteTool = await queryDB('DELETE FROM tools WHERE id = $1 RETURNING *', [toolID]);
    return deleteTool.rows;
};

module.exports = Tool;