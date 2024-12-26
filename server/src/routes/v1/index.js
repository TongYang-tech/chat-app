import express from 'express';

import chatsRouter from '../chats.js';
import usersRouter from '../users.js';
import messageRouter from '../message.js';

const v1Router = express.Router();

v1Router.use(chatsRouter);
v1Router.use(usersRouter);
v1Router.use(messageRouter);

export default v1Router;
