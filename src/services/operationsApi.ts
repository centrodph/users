import { listOperations } from "../model/query";
import { db } from "../model/setup";

export const getOperations = async (request, response) => {
  const { rows } = await db.query(listOperations());
  response.send(rows);
};

export const createOperation = async (request, response) => {
  const { rows } = await db.query(listOperations());
  response.send(rows);
};

