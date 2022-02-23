const { queryDB } = require('../db');

const Messages = {}

// this is just a test query
Messages.findMessages = async () => {
    const response = await queryDB('SELECT * FROM user_messages');
    return response.rows;
} 

Messages.findMessage = async (senderID) => {
    const findMessage = await queryDB('SELECT * FROM user_messages WHERE id_sender = $1', [senderID]);
    return findMessage.rows;
}

//This is to query for a spesific message
Messages.oneMessage = async (messageID) => {
    const oneMessage = await queryDB('SELECT * FROM user_messages WHERE id = $1', [messageID]);
    return oneMessage.rows[0];
}

 
Messages.createMessage = async (message, senderID, recipientID) => {
    const createMessage = await queryDB('UPSERT INTO user_messages (message, id_sender, id_recipient) VALUES ($1, $2, $3) RETURNING *', [message, senderID, recipientID]);
    return createMessage.rows;
}

// This deletes a message with ID. 
Messages.deleteMessage = async (messageID) => {
    const deleteMessage = await queryDB('DELETE FROM user_messages WHERE id = $1 RETURNING *', [messageID]);
    return deleteMessage.rows;
};


module.exports = Messages;