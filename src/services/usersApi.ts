import { listUsers, insertUser } from "../model/query";
import { db } from "../model/setup";

export const getUsers = async (request, response) => {
  const { rows } = await db.query(listUsers());
  response.send(rows);
};

export const createUser = async (request, response) => {
  try {
    const result = await db.query(insertUser(request.body));
    console.log(result);
    response.send(result);
  } catch (error) {
    response.status(500).send({ message: error.detail, error });
  }
};

export const editUser = async (request, response) => {
  const { rows } = await db.query(listUsers());
  response.send(rows);
};
