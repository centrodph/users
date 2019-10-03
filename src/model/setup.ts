const { Pool } = require("pg");

const db = new Pool({
  max: 10,
  connectionString: process.env.DATABASE_URL,
});

const setupDB = async () => {
  const client = await db.connect();

  await client.query(`
    CREATE TABLE IF NOT EXISTS users (
      id uuid PRIMARY KEY,
      email text UNIQUE,
      password text
    );
    `);

  await client.query(`
    CREATE INDEX IF NOT EXISTS users_email_idx on users (email);
    `);

  await client.release(true);
};

setupDB();

module.exports.db = db;
