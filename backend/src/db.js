const { Pool } = require('pg');
const { config } = require('dotenv');
const { query } = require('express');

config();

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
})

const promiseQuery = (query) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM users', (err, res) => {
            if (err) {
                reject(err);
            }
            resolve('success');
        });
    });
};

/*pool.query('SELECT * FROM users', (err, res) => {
    if(err) {
        throw err;
    }
    const { rows } = res;
    console.log(rows[0]);
    console.log(rows[1]);
    pool.end();
})*/
