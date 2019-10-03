const createTableUsers = `
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY,
  email text UNIQUE,
  password text
);
`;
module.exports.createUsers = createTableUsers;
//# sourceMappingURL=createTableUSers.js.map