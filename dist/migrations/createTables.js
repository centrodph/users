module.exports.clearTables = "\n  DROP TABLE IF EXISTS users CASCADE;\n  DROP SEQUENCE IF EXISTS users_id_seq;\n  DROP INDEX IF EXISTS users_email_idx;\n  DROP TABLE IF EXISTS operations CASCADE;\n  DROP SEQUENCE IF EXISTS operations_id_seq;\n  DROP INDEX IF EXISTS operations_idx;\n  DROP TYPE  IF EXISTS accesstype;\n  DROP TYPE  IF EXISTS userstatus;\n  DROP TYPE  IF EXISTS datastatus;\n";
module.exports.createTypes = "\n  CREATE TYPE accesstype AS ENUM ('ADMIN', 'SUPERVISOR', 'OPERATOR');\n  CREATE TYPE userstatus AS ENUM ('ACTIVE', 'INACTIVE');\n  CREATE TYPE datastatus AS ENUM ('PENDING', 'EXECUTING', 'EXECUTED');\n";
module.exports.createUsers = "\n  CREATE SEQUENCE IF NOT EXISTS users_id_seq;\n  CREATE TABLE IF NOT EXISTS users (\n    id INTEGER PRIMARY KEY DEFAULT nextval('users_id_seq'),\n    email text UNIQUE,\n    password text,\n    access accesstype,\n    status userstatus\n  );\n  CREATE INDEX IF NOT EXISTS users_email_idx on users (email);\n";
/**
 *  operations
 */
module.exports.createOperations = "\n  CREATE SEQUENCE IF NOT EXISTS operations_id_seq;\n  CREATE TABLE IF NOT EXISTS operations (\n    id INTEGER PRIMARY KEY DEFAULT nextval('operations_id_seq'),\n    status datastatus,\n    properties json DEFAULT '{}',\n    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),\n    created_by integer NOT NULL,\n    FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE CASCADE\n  );\n  CREATE INDEX IF NOT EXISTS operations_idx on operations (created_by);\n";
module.exports.createIndexUsers = "\n    SELECT (1+1);\n";
module.exports.addBasicUsers = "\n  INSERT INTO users (email, password, access) VALUES ('admin@demo.com', '1234', 'ADMIN')\n  ON CONFLICT (email)\n  DO NOTHING;\n  INSERT INTO users (email, password, access) VALUES ('supervisor@demo.com', '1234', 'SUPERVISOR')\n  ON CONFLICT (email)\n  DO NOTHING;\n  INSERT INTO users (email, password, access) VALUES ('operator@demo.com', '1234', 'OPERATOR')\n  ON CONFLICT (email)\n  DO NOTHING;\n";
//# sourceMappingURL=createTables.js.map