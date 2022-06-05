const { queryDB } = require('../db');

const Messages = {}

// this is just a test query
Messages.findMessages = async () => {
    const response = await queryDB('SELECT * FROM user_messages');
    return response.rows;
} 

Messages.getMessagesByUserId = async (id, params) => {
    const findMessage = await queryDB('SELECT * FROM user_messages WHERE (id_sender = $1 AND id_recipient = $2) OR ( id_recipient = $1 AND id_sender = $2)', [id, params]);
    return findMessage.rows;
}

//This is to query for a spesific message
Messages.getById = async (messageID) => {
    const oneMessage = await queryDB('SELECT * FROM user_messages WHERE id = $1', [messageID]);
    return oneMessage.rows[0];
}

 
Messages.createMessage = async (message, id, params) => {
    const createMessage = await queryDB("INSERT INTO user_messages (message, id_sender, id_recipient, sent) VALUES ($1, $2, $3, CURRENT_TIMESTAMP) RETURNING * ",[message, id, params]);
    return createMessage.rows[0];
}

// This deletes a message with ID. 
Messages.deleteMessage = async (messageID) => {
    const deleteMessage = await queryDB('DELETE FROM user_messages WHERE id = $1 RETURNING *', [messageID]);
    return deleteMessage.rows;
};


module.exports = Messages;