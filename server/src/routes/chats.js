import express from 'express';

import { chatsController } from '../controllers/chatController.js';

const chatsRouter = express.Router();

chatsRouter.get('/chats', chatsController);

export default chatsRouter;