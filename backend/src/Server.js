const registerUsers = require('./routes/user.routes');
const authUser = require('./routes/auth.routes')


// Server stuff
const { config } = require('dotenv');
config();
const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

app.use(express.json())

authUser(app);
registerUsers(app);

console.log("hello");
app.listen(3000)
