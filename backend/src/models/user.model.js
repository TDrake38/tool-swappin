const { queryDB } = require('../db');

const User = function (user) {
    this.username = user.username;
    // ...
}

User.findAll = async () => {
    const response = await queryDB('SELECT * FROM users');
    return response.rows;
}

User.getUser = async (id) => {
    const getUser = await queryDB('SELECT * FROM users WHERE id = $1', [id]);
    return getUser.rows[0];
}

//This returns and empty array
User.findUserByUsername = async (username) => {
    const findUser = await queryDB('SELECT * FROM users WHERE user_name = $1', [username]);
    return findUser.rows[0];
}

User.findUserById = async (id) => {
    const findUser = await queryDB('SELECT * FROM users WHERE id = $1', [id]);
    return findUser.rows[0];
}

User.createUser = async (username, password) => {
    const createUser = await queryDB('INSERT INTO users (user_name, password) VALUES ($1, $2) RETURNING id, name, area, user_name', [username, password]);
    return createUser.rows;
}

// TODO: if you want
User.deleteUser = async (id) => {
    const deleteUser = await queryDB('DELETE FROM users WHERE id = $1 RETURNING id, name, area, user_name', [id]);
    return deleteUser.rows;
};

module.exports = User;