export const messageSchema = `
CREATE TABLE IF NOT EXISTS messages (
  message_id SERIAL PRIMARY KEY,
  chat_id INT NOT NULL,
  user_id INT NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  CONSTRAINT fk_chats FOREIGN KEY(chat_id) REFERENCES chats(chat_id) ON DELETE CASCADE,
  CONSTRAINT fk_users FOREIGN KEY(user_id) REFERENCES users(user_id) ON DELETE CASCADE
);
`;