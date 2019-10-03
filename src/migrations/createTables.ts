module.exports.createUsers = `
DROP TABLE users;
CREATE SEQUENCE IF NOT EXISTS users_id_seq;
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY DEFAULT nextval('users_id_seq'),
  email text UNIQUE,
  password text
);
`;
module.exports.createIndexUsers = `
CREATE INDEX IF NOT EXISTS users_email_idx on users (email);
`;

module.exports.addBasicUsers = `
  INSERT INTO users VALUES (1,'admin@demo.com', '1234')
  ON CONFLICT (email)
  DO NOTHING;
  INSERT INTO users VALUES (2,'supervisor@demo.com', '1234')
  ON CONFLICT (email)
  DO NOTHING;
  INSERT INTO users VALUES (3,'operator@demo.com', '1234')
  ON CONFLICT (email)
  DO NOTHING;
`;