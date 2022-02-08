const { Pool } = require('pg');
const { config } = require('dotenv');

config();

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
})

module.exports.queryDB = (query, values) => {
    return new Promise((resolve, reject) => {
        pool.query(query, values, (err, res) => {
            if (err) {
                reject(err);
            }
            resolve(res);
        });
    });
};