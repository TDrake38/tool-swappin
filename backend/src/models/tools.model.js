const { queryDB } = require('../db');

const Tool = {}

Tool.findAll = async () => {
    const response = await queryDB('SELECT * FROM tools');
    return response.rows;
}

//TODO: make this so it filters for the word put into the search bar
Tool.search = async (searchBar) => {
    //const response = await queryDB(`SELECT * FROM tools WHERE LOWER (name) LIKE '%' || LOWER ($1) || '%' AND owner_id != $2`, [searchBar, id]);
    const response = await queryDB(`SELECT * FROM tools WHERE LOWER (name) LIKE '%' || LOWER ($1) || '%'`, [searchBar]);
    return response.rows;
}

// Tool.search = async (searchBar, id) => {
//     const response = await queryDB(`SELECT * FROM tools WHERE LOWER (name) LIKE '%' || LOWER ($1) || '%' AND owner_id != $2`, [searchBar, id]);
//     return response.rows;
// }

Tool.findTool = async (id) => {
    const findTool = await queryDB('SELECT * FROM tools WHERE owner_id = $1', [id]);
    return findTool.rows;
}

//This is to query for a spesific tool
Tool.oneTool = async (toolID) => {
    const oneTool = await queryDB('SELECT * FROM tools WHERE id = $1', [toolID]);
    return oneTool.rows[0];
}

//TODO: Fill in owner_id as well 
Tool.createTool = async (photo, toolName, area, ownerID) => {
    const createTool = await queryDB('INSERT INTO tools (photo, name, area, owner_id) VALUES ($1, $2, $3, $4) RETURNING *', [photo, toolName, area, ownerID]);
    return createTool.rows;
}

// This deletes a tool with ID. 
Tool.deleteTool = async (id) => {
    const deleteTool = await queryDB('DELETE FROM tools WHERE id = $1 RETURNING *', [id]);
    return deleteTool.rows;
};

module.exports = Tool;