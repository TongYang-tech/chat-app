import express from 'express';

import { healthController } from '../controllers/healthContoller.js'

const healthRouter = express.Router();

healthRouter.get('/', healthController);

export default healthRouter;
