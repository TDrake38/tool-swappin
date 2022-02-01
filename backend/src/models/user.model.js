const { queryDB } = require('../db');

const User = function (user) {
    this.username = user.username;
    // ...
}

User.findAll = async () => {
    const response = await queryDB('SELECT * FROM users');
    return response.rows;
}

//This returns and empty array
User.findUser = async (username) => {
    const findUser = await queryDB('SELECT * FROM users WHERE user_name = $1', [username]);
    return findUser.rows[0];
}

User.createUser = async (username, password) => {
    const createUser = await queryDB('INSERT INTO users (user_name, passwords) VALUES ($1, $2) RETURNING *', [username, password]);
    return createUser.rows;
}

//This deletes a user with an ID. 
User.deleteUser = async (id) => {
    const deleteUser = await queryDB('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
    return deleteUser.rows;
};

module.exports = User;