import { everyUsers, insertUser } from '../model/userModel.js';

export const getAllUsers = async (req, res) => {
  try {
    const queryRes = await everyUsers();
    res.status(200).send(queryRes.rows)
  } catch (err) {
    res.status(400);
    throw new Error(err.message);
  }
};

export const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    await insertUser(username, email, password);
    res.status(201).send({ result: 'user created' });
  } catch (err) {
    res.status(400);
    throw new Error(err.message);
  }
};
