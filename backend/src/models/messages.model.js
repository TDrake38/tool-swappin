const { queryDB } = require('../db');

const Messages = {}

// this is just a test query
Messages.findMessage = async () => {
    const response = await queryDB('SELECT * FROM messages');
    return response.rows;
} 


module.exports = Messages;