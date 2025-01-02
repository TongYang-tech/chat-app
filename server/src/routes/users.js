import express from 'express';
import { body } from 'express-validator';

import { getAllUsers, createUser } from '../controllers/userController.js';

const reqbody = ['username', 'email', 'password'];
const userRouter = express.Router();

userRouter.get('/', getAllUsers);
userRouter.post('/', body(reqbody).exists().isString(), createUser);

export default userRouter;
