import { Pool } from 'pg';
import { config } from 'dotenv';

config();

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
})

pool.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    pool.end()
})