import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './src/routes/index.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

const corsOptions = {
  origin: ['http://localhost:5173']
};
const port = 5000;
const basePath = '/api';

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(basePath, router);

app.listen(port);
