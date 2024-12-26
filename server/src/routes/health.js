import express from 'express';

import { healthController } from '../controllers/healthContoller.js'

const healthRouter = express.Router();

healthRouter.get('/health', healthController);

export default healthRouter;