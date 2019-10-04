module.exports.clearTables = `
  DROP TABLE IF EXISTS users;
  DROP SEQUENCE IF EXISTS users_id_seq;
  DROP INDEX IF EXISTS users_email_idx;

`;
module.exports.createUsers = `
  CREATE SEQUENCE IF NOT EXISTS users_id_seq;
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY DEFAULT nextval('users_id_seq'),
    email text UNIQUE,
    password text
  );
  CREATE INDEX IF NOT EXISTS users_email_idx on users (email);
`;
module.exports.createIndexUsers = `
    SELECT (1+1);
`;

module.exports.addBasicUsers = `
  INSERT INTO users (email, password) VALUES ('admin@demo.com', '1234')
  ON CONFLICT (email)
  DO NOTHING;
  INSERT INTO users (email, password) VALUES ('supervisor@demo.com', '1234')
  ON CONFLICT (email)
  DO NOTHING;
  INSERT INTO users (email, password) VALUES ('operator@demo.com', '1234')
  ON CONFLICT (email)
  DO NOTHING;
`;