import { Pool } from 'pg';

const {
  createUsers,
  createIndexUsers,
  addBasicUsers,
} = require("../migrations/createTables");

const db = new Pool({
  max: 10,
  connectionString: process.env.DATABASE_URL,
});

const setupDB = async () => {
  try {
    const client = await db.connect();

    await client.query(createUsers);
    await client.query(createIndexUsers);
    await client.query(addBasicUsers);
  } catch (error) {
    console.log(error);
  }
};

setupDB();

export { db };
