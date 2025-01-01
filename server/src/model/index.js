import { pool } from '../../config/db.js';

const createSchema = (query) => {
  try {
    pool.query(query);
  } finally {
    pool
  }
};
