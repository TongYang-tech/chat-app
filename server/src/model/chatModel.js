export const chatSchema = `
CREATE TABLE IF NOT EXISTS chats (
  chat_id SERIAL PRIMARY KEY,
  is_group BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
`;