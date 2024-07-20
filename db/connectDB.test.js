const { connect, disconnect, findUser, saveUser } = require('./connectDB');
const mongoose = require('mongoose');
const User = require('../models/userModel');

// describe() -- test() -- expect()
jest.mock('./connectDB.js')
beforeAll(async () => {
  return await connect();
});

describe('User Test Suite', () => {
  test('As a user I want to save users to the database', async () => {
    const newUser = new User({
      firstName: 'John',
      lastName: 'Max',
      email: 'john@email.com',
      password: '123456@John',
    });
    const user = await saveUser(newUser);
    expect(user.firstName).toEqual('John');
    expect(user.lastName).toEqual('Max');
    expect(user.email).toEqual('john@email.com');
  });
  test('As a user I want to find user by attribute', async () => {
    const user =  await findUser({email: 'john@email.com'})
    expect(user.firstName).toBe('John');
    expect(user.lastName).toBe('Max');
  })
});

afterAll(async () => {
  return disconnect();
});
