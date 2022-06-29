const { queryDB } = require("../db");

const User = function (user) {
  this.username = user.username;
  // ...
};

User.findAll = async () => {
  const response = await queryDB("SELECT * FROM users");
  return response.rows;
};

//make this eventually to show only users that share messages/have sent a message to another user.
//TODO move this to messages and link to users table to display ^^^^ only
User.findOtherUsersByID = async (id) => {
  const response = await queryDB("SELECT * FROM users WHERE id != $1", [id]);
  return response.rows;
};

User.getUser = async (id) => {
  const getUser = await queryDB("SELECT * FROM users WHERE id = $1", [id]);
  return getUser.rows[0];
};

//This returns and empty array
User.findUserByUsername = async (username) => {
  const findUser = await queryDB("SELECT * FROM users WHERE user_name = $1", [
    username,
  ]);
  return findUser.rows[0];
};

User.findUserById = async (id) => {
  const findUser = await queryDB("SELECT * FROM users WHERE id = $1", [id]);
  return findUser.rows[0];
};

//test for filtering user by messages
User.findUserByMessages = async (id) => {
  const findUser = await queryDB("SELECT DISTINCT (users.id), users.* FROM users INNER JOIN user_messages ON (users.id = user_messages.id_sender AND $1 = user_messages.id_recipient) OR (users.id = user_messages.id_recipient AND $1 = user_messages.id_sender)", [id]);
  return findUser.rows;
};

User.createUser = async (username, area, password) => {
  const createUser = await queryDB(
    "INSERT INTO users (user_name, area, password) VALUES ($1, $2, $3) RETURNING id, name, area, user_name",
    [username, area, password]
  );
  return createUser.rows;
};

//need to change to UPDATE/instead of add because now it adds a user with no credentials just a photo.
User.editPhoto = async (photo) => {
  const editPhoto = await queryDB(
    "INSERT INTO users (photo) VALUES ($1) RETURNING *",
    [photo]
  );
  return editPhoto.rows;
};

// TODO: if you want
User.deleteUser = async (id) => {
  const deleteUser = await queryDB(
    "DELETE FROM users WHERE id = $1 RETURNING id, name, area, user_name",
    [id]
  );
  return deleteUser.rows;
};

module.exports = User;
