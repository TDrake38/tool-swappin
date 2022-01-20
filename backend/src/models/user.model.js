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

//Not sure how to actually wirte this.
User.createUser = async (username, password) => {
    const createUser = await queryDB('INSERT INTO users (user_name, passwords) VALUES ($1, $2) RETURNING *', [username, password]);
    return createUser.rows;
}

//delete user?

// const Schema = postgres.Schema;

// const ModleShema = new Schema({
//     "name": String,
//     "area": String,
//     "passwords": String,
//     "user_name": String
// });





module.exports = User;