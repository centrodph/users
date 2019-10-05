import { listUsers } from "../model/query";
import { db } from "../model/setup";

export const getUsers = async (request, response) => {
  const { rows } = await db.query(listUsers());
  response.send(rows);
};
