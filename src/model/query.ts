import sql from "sql-template-strings";
import { UserCreate, UserUpdateStatus } from "./userType";
import { OperationCreate, OperationEdit } from "./operationType";

export const listUsers = () => `
 SELECT * FROM users ORDER BY id ASC;
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

export const updateUserStatus = ({ id, status }: UserUpdateStatus) => sql`
  UPDATE users SET status = ${status} WHERE id=${id};
`;

/**
 * Operations
 */
export const listOperations = () => `
 SELECT op.*, us.email, us.id as user_id FROM operations op LEFT JOIN users us ON op.created_by = us.id ORDER BY op.id ASC;
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

export const updateOperation = ({
  id,
  status,
  properties,
}: OperationEdit) => sql`
  UPDATE operations SET status = ${status}, properties = ${properties} WHERE id=${id};
`;
