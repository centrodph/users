import sql from "sql-template-strings";

export const listUsers = () => `
 SELECT * FROM users;
`;

export const loginUser = ({
  email,
  password,
}: {
  email: string;
  password?: string;
}) => sql`
    SELECT * FROM users WHERE email=${email} LIMIT 1;
`;
