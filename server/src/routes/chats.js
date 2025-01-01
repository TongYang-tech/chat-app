import express from 'express';

import { chatsController } from '../controllers/chatController.js';

const chatsRouter = express.Router();

chatsRouter.get('/', chatsController);

export default chatsRouter;