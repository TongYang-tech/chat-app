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

export const everyUsers = async () => {
  const query = `SELECT * FROM users;`;
  const res = await pool.query(query);
  return res
};

export const insertUser = async (username, email, password) => {
  const query = `INSERT INTO users(username, email, password) VALUES($1, $2, $3);`;
  const values = [username, email, password];
  const res = await pool.query(query, values);
  return res
};
