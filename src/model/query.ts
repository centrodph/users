import sql from 'sql-template-strings';
export const listUsers = () => sql`
 SELECT * FROM users;
`;
