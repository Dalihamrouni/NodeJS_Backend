const connect = async () => {
  console.log(
    `\n 🔥 🔥 🔥  --- CONNECTION  TO MOCK 🧪🔬 DATABASE ESTABLISHED SUCCESSFULLY --- 🔥 🔥 🔥 \n`
  );
};

const findUser = async (attributes) => {
  return Promise.resolve({
    firstName: 'John',
    lastName: 'Max',
    email: 'john@email.com',
    password: '123456@John',
  });
};

const saveUser = async (user) => {
  return Promise.resolve({
    firstName: 'John',
    lastName: 'Max',
    email: 'john@email.com',
    password: '123456@John',
  });
};

const disconnect = async () => {
  console.log(
    `\n ⚠️  ⚠️  ⚠️  --- DISCONNECTION TO MOCK 🧪🔬 DATABASE DONE SUCCESSFULLY --- ⚠️  ⚠️  ⚠️ \n`
  );
};
module.exports = { connect, disconnect, findUser, saveUser };
