const User = require('../models/user.model');
const bcrypt = require('bcrypt')

module.exports.getAll = async (req, res) => {
    const allUsers = await User.findAll();
    res.json(allUsers.map((original) => {
        return {
            user_name: original.user_name,
            id: original.id
        }
    }));
}

module.exports.getContacts = async (req, res) => {
    const allUsers = await User.findAll();
    const loggedUser = await User.findUserById(req.user.id);
    res.json(allUsers.map((original) => {
        return {
            user_name: original.user_name,
            id: original.id
        }
    }));
}

module.exports.getList = async (req, res) => {
    try {
        res.json(await User.findAll())
    } catch (e) { 
        console.error(e)
        res.status(500).send()
    }
}

// this is a test to see if I can find a user.
module.exports.find = async (req, res) => {
    console.log(await User.getUser(req.user.id));
    res.json(await User.getUser(req.user.id));
}

module.exports.testFind = async (req, res) => {
    console.log(await User.findUserByUsername(req.body.username));
    res.json(await User.findUserByUsername(req.body.username));
}

module.exports.findUser = async (req, res) => {
    console.log(await User.findUserById(req.params.id));
    res.json(await User.findUserById(req.params.id));
}

module.exports.user = async (req, res) => {
    //This alone will return all the tools with the same owner_id
    res.json(await User.getUser(req.user.id));
    //console.log(tool)
}

module.exports.createUser = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, parseInt (process.env.TOOL_SWAPPIN_SALT, 10))
        res.json(await User.createUser(req.body.username, req.body.area, hashedPassword)).send()
        console.log('User created')
    } catch (e) { 
        console.error(e)
        res.status(500).send()
    }
}

module.exports.deleteUser = async (req, res) => {
    try {
        //const hashedPassword = await bcrypt.hash(req.body.password, parseInt (process.env.TOOL_SWAPPIN_SALT, 10))
        res.json(await User.deleteUser(req.body.id)) //(req.body.username, hashedPassword)).send()
        console.log('user deleted')
    } catch (e) { 
        console.error(e)
        res.status(500).send()
    }
}
