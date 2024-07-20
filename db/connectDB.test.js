const { connect, disconnect, findUser, createUser } = require('./connectDB');
const mongoose = require('mongoose');
const User = require('../models/userModel');

// describe -- test -- expect

beforeAll(async () => {
  return await connect();
});

describe('', () => {
  test('', () => {
    expect().toEqual();
  });
});

afterAll(async () => {
  return disconnect();
});
