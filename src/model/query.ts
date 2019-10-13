import sql from "sql-template-strings";
import { UserCreate } from "./userType";
import { OperationCreate } from "./operationType";

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
    SELECT * FROM users WHERE email=${email} AND password=${password} LIMIT 1;
`;

export const userFindById = ({ id }: { id: string | number }) => sql`
    SELECT * FROM users WHERE id=${id} LIMIT 1;
`;

export const insertUser = ({
  email,
  password,
  access,
  status,
}: UserCreate) => sql`
  INSERT INTO users (email, password, access, status)
  VALUES
  (${email}, ${password}, ${access}, ${status});
`;

/**
 * Operations
 */
export const listOperations = () => `
 SELECT op.*, us.email, us.id as user_id FROM operations op LEFT JOIN users us ON op.created_by = us.id;
`;

export const insertOperation = ({
  status,
  properties,
  created_by,
}: OperationCreate) => sql`
  INSERT INTO operations (status, properties, created_by)
  VALUES
  (${status}, ${properties}, ${created_by});
`;
