const { Pool } = require('pg');
const { config } = require('dotenv');

config();

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
})

pool.query('SELECT * FROM users', (err, res) => {
    if(err) {
        throw err;
    }
    const { rows } = res;
    console.log(rows[0]);
    console.log(rows[1]);
    pool.end();
})
