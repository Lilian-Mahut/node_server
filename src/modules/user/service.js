<<<<<<< HEAD:api/modules/user/service.js
import brcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import config from "../../config/server";
import userQueries from "./query";
=======
import brcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import config from '../../config/server';
import userQueries from './query';
>>>>>>> master:src/modules/user/service.js

const userServices = {
  getAll: (req, callback) => {
    userQueries.getAll(
      req,
      response => {
        return callback({ success: true, message: response });
      },
      error => {
        return callback({ success: false, message: error });
      },
    );
  },
  getById: (id, callback) => {
    userQueries.getById(
      id,
      response => {
        return callback({ success: true, message: response });
      },
      error => {
        return callback({ success: false, message: error });
      },
    );
  },
  authenticate: async body => {
    let { email, password } = body;
    if (typeof email !== 'string' || typeof password !== 'string') {
      return {
        status: 400,
        payload: {
          success: false,
          message: 'All fields are required and must be a string type',
        },
      };
    }
    const user = await userQueries.getByEmail(email);
    if (!user) {
      return {
        status: 401,
        payload: { success: false, message: 'Email not found' },
      };
    }
    const passwordMatched = await brcrypt.compare(password, user.password);
    if (passwordMatched) {
      const token = jwt.sign({ id: user.id }, config.secret);
      const { password, ...userWithoutPassword } = user;
      return {
        status: 200,
        payload: {
          success: true,
          message: 'User correctly authenticated',
          data: { token: token, user: userWithoutPassword },
        },
      };
    }
    return {
      status: 401,
      payload: { success: false, message: 'Email & password missmatch' },
    };
  },
<<<<<<< HEAD:api/modules/user/service.js
  register: async (body) => {
    let { name, password, email } = body
    if (typeof email !== "string" || typeof password !== "string") {
      return { status: 400, payload: { success: false, message: "All fields are required and must be a string type" } }
    }
    return brcrypt.genSalt()
    .then(salt => brcrypt.hash(password, salt))
    .then(hashedPassword => userQueries.register({ email, hashedPassword }))
    .then(user => ({ status: 201, payload: { success: true, message: 'User successfully registered' } }))
    .catch(err => ({ status: 400, payload: { success: false, message: err } }))
=======
  register: async body => {
    let { email, password } = body;
    if (typeof email !== 'string' || typeof password !== 'string') {
      return {
        status: 400,
        payload: {
          success: false,
          message: 'All fields are required and must be a string type',
        },
      };
    }
    return brcrypt
      .genSalt()
      .then(salt => brcrypt.hash(password, salt))
      .then(hashedPassword => userQueries.register({ email, hashedPassword }))
      .then(user => ({
        status: 201,
        payload: { success: true, message: 'User successfully registered' },
      }))
      .catch(err => ({
        status: 400,
        payload: { success: false, message: err },
      }));
>>>>>>> master:src/modules/user/service.js
  },
  getUserWithToken: async req => {
    const user = await userQueries.getUserInformationsByUserId(req.user.id);
    if (!user) {
      return {
        status: 401,
        payload: { success: false, message: 'User not found' },
      };
    }
    const { password, ...userWithoutPassword } = user;
    return {
      status: 200,
      payload: {
        success: true,
        message: 'User correctly authenticated',
        data: { user: userWithoutPassword },
      },
    };
  },
};

export default userServices;
