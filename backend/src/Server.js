const registerUsers = require('./routes/user.routes');
const reqisterTool = require('./routes/tools.routes')
const messages = require('./routes/messages.routes')
const userAuth = require('./routes/auth.routes')
const {checkIsAuthenticated} = require('./controllers/auth.controller')

// Server stuff
const { config } = require('dotenv');
config();
const express = require('express')
const app = express()
// const bcrypt = require('bcrypt')
// const jwt = require('jsonwebtoken')

app.use(express.json({limit: "50mb"}))
app.use(checkIsAuthenticated)
app.use(express.urlencoded({ extended: false }))

userAuth(app);
registerUsers(app);
reqisterTool(app);
messages(app);

app.listen(3000)
