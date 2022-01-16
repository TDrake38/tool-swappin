//const { InputGroup } = require('react-bootstrap');
const { queryDB } = require('../db');

const User = function (user) {
    this.username = user.username;
    // ...
}

User.findAll = async () => {
    const response = await queryDB('SELECT * FROM users');
    return response.rows;
}

//User.creUser = async ()..... INSERT instead of SELECT
User.creUser = async () => {
    const creaUser =  queryDB('INSERT INTO users, VALUES (username, hashedPassword)');
    return creaUser.rows;
}
//delete user?

module.exports = User;