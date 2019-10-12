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
 SELECT * FROM operations;
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
