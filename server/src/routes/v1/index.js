import express from 'express';

import chatsRouter from '../chats.js';
import usersRouter from '../users.js';
import messageRouter from '../message.js';

const v1Router = express.Router();

v1Router.use('/chats', chatsRouter);
v1Router.use('/users', usersRouter);
v1Router.use('/messages', messageRouter);

export default v1Router;
