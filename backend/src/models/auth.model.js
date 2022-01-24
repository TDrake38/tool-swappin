const { queryDB } = require('../db');

// copied from user.model to try and get the auth controller to work
const UserAuth = function (user) {
    this.username = user.username;
}

// this is just a test query
UserAuth.findAll = async () => {
    const response = await queryDB('SELECT * FROM users');
    return response.rows;
}

UserAuth.findSomeone = async (req, res) => {
    try {
        const username = req.body.username;
        const findUser = await queryDB('SELECT * FROM users WHERE user_name = $1', [username]);

        res.json(findUser.rows)
    } catch (err) {
        console.error(err.message);
    }

    // doesn't return anything now, but will console log lol
    //const findUser = await queryDB('SELECT * FROM users WHERE user_name = $1', [username]);
    //console.log('found user')
    //return findUser.rows;
}

module.exports = UserAuth;