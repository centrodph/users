var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { Pool } = require("pg");
const db = new Pool({
    max: 10,
    connectionString: process.env.DATABASE_URL,
});
const setupDB = () => __awaiter(this, void 0, void 0, function* () {
    const client = yield db.connect();
    yield client.query(`
    CREATE TABLE IF NOT EXISTS users (
      id uuid PRIMARY KEY,
      email text UNIQUE,
      password text
    );
    `);
    yield client.query(`
    CREATE INDEX IF NOT EXISTS users_email_idx on users (email);
    `);
    yield client.release(true);
});
setupDB();
module.exports.db = db;
//# sourceMappingURL=setup.js.map