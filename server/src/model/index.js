import { pool } from '../../config/db.js';

const createSchema = (query) => {
  pool.query(query);
};
