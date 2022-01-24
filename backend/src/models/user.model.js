const { queryDB } = require('../db');

const User = function (user) {
    this.username = user.username;
    // ...
}

User.findAll = async () => {
    const response = await queryDB('SELECT * FROM users');
    return response.rows;
}

//This works to find the user Kyle out of the database - now i have to make it work with auth.model
User.findUser = async (username) => {
    const findUser = await queryDB('SELECT * FROM users WHERE user_name = $1', [username]);
    return findUser.rows;
}

//Not sure how to actually wirte this.
User.createUser = async (username, password) => {
    const createUser = await queryDB('INSERT INTO users (user_name, passwords) VALUES ($1, $2) RETURNING *', [username, password]);
    return createUser.rows;
}

//FIX BELOW to actually remove a user!!!
// User.deleteUser = async (username, password) => {
//     const deleteUser = await queryDB('DROP FROM users (user_name, passwords) VALUES ($1, $2) RETURNING *', [username, password]);
//     return deleteUser.rows;
// };

module.exports = User;