import { listUsers, insertUser } from "../model/query";
import { db } from "../model/setup";

export const getUsers = async (request, response) => {
  const { rows } = await db.query(listUsers());
  response.send(rows);
};

export const createUser = async (request, response) => {
  const { rows } = await db.query(insertUser(request.user));
  response.send(rows);
};

export const editUser = async (request, response) => {
  const { rows } = await db.query(listUsers());
  response.send(rows);
};
