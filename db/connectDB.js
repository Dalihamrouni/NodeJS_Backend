const { mongoose } = require('mongoose');
const User = require('../models/userModel');

const connect = async () => {
  await mongoose.connect('mongodb://127.0.0.1:27017/node_backend_db');
  console.log(
    `\n⚠️  ⚠️  ⚠️  --- CONNECTION TO DATABASE ESTABLISHED SUCCESSFULLY --- ⚠️  ⚠️  ⚠️\n`
  );
};

const findUser = async (attributes) => {
  return await User.findOne(attributes).exec();
};

const saveUser = async (user) => {
  return await user.save();
};

const disconnect = async () => {
  await mongoose.connection.close();
};
module.exports = { connect, disconnect, findUser, saveUser };
