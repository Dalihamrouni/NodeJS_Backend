const { mongoose } = require('mongoose');

const connect = async () => {
  await mongoose.connect('mongodb://127.0.0.1:27017/node_backend_db');
  console.log(
    `\n⚠️  ⚠️  ⚠️  --- CONNECTION TO DATABASE ESTABLISHED SUCCESSFULLY --- ⚠️  ⚠️  ⚠️\n`
  );
};

const disconnect = async () => {
  await mongoose.connection.close();
};
module.exports = { connect, disconnect };
