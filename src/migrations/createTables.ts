module.exports.clearTables = `
  DROP TABLE IF EXISTS users;
  DROP SEQUENCE IF EXISTS users_id_seq;
  DROP INDEX IF EXISTS users_email_idx;
  DROP TYPE  IF EXISTS accesstype;
  DROP TYPE  IF EXISTS userstatus;
  DROP TYPE  IF EXISTS datastatus;
`;

module.exports.createTypes = `
  CREATE TYPE accesstype AS ENUM ('ADMIN', 'SUPERVISOR', 'OPERATOR');
  CREATE TYPE userstatus AS ENUM ('ACTIVE', 'INACTIVE');
  CREATE TYPE datastatus AS ENUM ('PENDING', 'EXECUTING', 'EXECUTED');
`;

module.exports.createUsers = `
  CREATE SEQUENCE IF NOT EXISTS users_id_seq;
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY DEFAULT nextval('users_id_seq'),
    email text UNIQUE,
    password text,
    access accesstype,
    status userstatus
  );
  CREATE INDEX IF NOT EXISTS users_email_idx on users (email);
`;

/**
 *  operations
 */
module.exports.createOperations = `
  CREATE SEQUENCE IF NOT EXISTS operations_id_seq;
  CREATE TABLE IF NOT EXISTS operations (
    id INTEGER PRIMARY KEY DEFAULT nextval('operations_id_seq'),
    status datastatus,
    properties json
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    created_by integer NOT NULL,
    FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE CASCADE
  );
  CREATE INDEX IF NOT EXISTS users_email_idx on operations (created_by);
`;

module.exports.createIndexUsers = `
    SELECT (1+1);
`;

module.exports.addBasicUsers = `
  INSERT INTO users (email, password, access) VALUES ('admin@demo.com', '1234', 'ADMIN')
  ON CONFLICT (email)
  DO NOTHING;
  INSERT INTO users (email, password, access) VALUES ('supervisor@demo.com', '1234', 'SUPERVISOR')
  ON CONFLICT (email)
  DO NOTHING;
  INSERT INTO users (email, password, access) VALUES ('operator@demo.com', '1234', 'OPERATOR')
  ON CONFLICT (email)
  DO NOTHING;
`;