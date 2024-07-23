const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const errorTemplate = require('../templates/errorTemplate');
const { saveUser, findUser } = require('../db/connectDB');
const User = require('../models/userModel');

exports.registerHandler = async (req, resp) => {
  try {
    const { firstName, lastName, email, password, confirmPassword } = req.body;
    const user = await findUser({ email });
    if (user) {
      return errorTemplate(resp, {
        status: 409,
        message: 'User Already exists. Try to login .',
      });
    } else {
      if (password != confirmPassword) {
        return errorTemplate(resp, {
          status: 400,
          message: 'Passwords Must Match .',
        });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        firstName,
        lastName,
        email,
        password: hashedPassword,
      });
      // errorTemplate
      const createdUser = await saveUser(newUser);
      const data = {
        id: createdUser._id,
        firstName: createdUser.firstName,
        lastName: createdUser.lastName,
        email: createdUser.email,
      };
      return resp.status(201).json({
        message: 'Successful - POST - REGISTER USER',
        metadata: {
          hostname: resp.hostname,
          method: req.method,
        },
        data,
      });
    }
  } catch (error) {
    return errorTemplate(resp, error);
  }
};

exports.loginHandler = async (req, resp) => {
  try {
    const { email, password } = req.body;
    const user = await findUser({ email });
    if (!user) {
      return errorTemplate(resp, {
        status: 404,
        message: 'User Not Found. Try to Register.',
      });
    } else {
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return errorTemplate(resp, { status: 400, message: 'Wrong Password.' });
      } else {
        delete user.password;
        delete user.__v;
        const token = jwt.sign(
          { email: user.email, id: user._id },
          'SECRET_KEY'
        );
        const data = {
          id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          token,
        };
        return resp.status(200).json({
          message: 'Successful - POST - LOGIN USER',
          data,
        });
      }
    }
  } catch (error) {
    return errorTemplate(resp, error);
  }
};
