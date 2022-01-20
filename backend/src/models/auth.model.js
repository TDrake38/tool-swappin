const { queryDB } = require('../db');

const UserAuth = function (userAuth) {
    this.userAuth = userAuth.username;
}

UserAuth.findAll = async () => {
    const response = await queryDB('SELECT * FROM users');
    return response.rows;
}

module.exports = UserAuth;