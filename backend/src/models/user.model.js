const { queryDB } = require('../db');

const User = function (user) {
    this.username = user.username;
    // ...
}

User.findAll = async () => {
    const response = await queryDB('SELECT * FROM users');
    return response.rows;
}

//Not sure how to actually wirte this.
User.createUser = async (username, password) => {
    const createUser = await queryDB('INSERT INTO users (user_name, passwords) VALUES ($1, $2) RETURNING *', [username, password]);
    return createUser.rows;
}

//FIX BELOW to actually remove a user!!!
User.deleteUser = async (username, password) => {
    const deleteUser = await queryDB('DROP FROM users (user_name, passwords) VALUES ($1, $2) RETURNING *', [username, password]);
    return deleteUser.rows;
}

module.exports = User;