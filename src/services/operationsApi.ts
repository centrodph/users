import { listOperations, insertOperation } from "../model/query";
import { db } from "../model/setup";

export const getOperations = async (request, response) => {
  const { rows } = await db.query(listOperations());
  response.send(rows);
};

export const createOperation = async (request, response) => {
  try {
    const result = await db.query(insertOperation(request.body));
    console.log(result);
    response.send(result);
  } catch (error) {
    response.status(500).send({ message: error.detail, error });
  }
};