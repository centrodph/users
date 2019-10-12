import { listOperations, insertOperation } from "../model/query";
import { db } from "../model/setup";

export const getOperations = async (request, response) => {
  const { rows } = await db.query(listOperations());
  response.send(rows);
};

export const createOperation = async (request, response) => {
  try {
    const result = await db.query(
      insertOperation({ ...request.body, created_by: request.user.id }),
    );
    response.send(result);
  } catch (error) {
    response.status(500).send({ error, message: error.detail });
  }
};
