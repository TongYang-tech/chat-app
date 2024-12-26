import express from 'express';

import { userController } from '../controllers/userController.js'

const userRouter = express.Router();

userRouter.get('/users', userController);

export default userRouter;