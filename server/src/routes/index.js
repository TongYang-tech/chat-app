import express from 'express';

import v1Router from './v1/index.js';
import healthRouter from './health.js';

const router = express.Router();

router.use('/v1', v1Router);
router.use('/health', healthRouter);

export default router;
