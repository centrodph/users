import sql from "sql-template-strings";

export const listUsers = () => `
 SELECT * FROM users;
`;

export const listOperations = () => `
 SELECT * FROM operations;
`;

export const loginUser = ({
  email,
  password,
}: {
  email: string;
  password?: string;
}) => sql`
    SELECT * FROM users WHERE email=${email} AND password=${password} LIMIT 1;
`;

export const userFindById = ({
  id,
}: {
  id: string | number;
}) => sql`
    SELECT * FROM users WHERE id=${id} LIMIT 1;
`;
