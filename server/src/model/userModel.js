import { pool } from '../../config/db.js';

export const userSchema = `
CREATE TABLE IF NOT EXISTS users (
  user_id SERIAL PRIMARY KEY,
  username TEXT,
  email TEXT,
  password TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
`;

export const createUser = async (username, email, password) => {
  const insertUser = `INSERT INTO users(username, email, password) VALUES($1, $2, $3);`;
  const values = [username, email, password];
  await pool.query(insertUser, values);
};
