import pkg from 'pg';
import dotenv from 'dotenv';
const { Pool } = pkg;

dotenv.config();

const dbconfig = {
    user: 'postgres',
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT
};

export const pool = new Pool(dbconfig)
