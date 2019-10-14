import { getUsersPerStatus, getOperationsPerDay } from "../model/query";
import { db } from "../model/setup";

export const getStats = async (request, response) => {
  try {
    const userPerStatus = await db.query(getUsersPerStatus());
    const operationsPerDay = await db.query(getOperationsPerDay());
    response.send({
      userPerStatus: userPerStatus.rows,
      operationsPerDay: operationsPerDay.rows,
    });
  } catch (error) {
    response.status(500).send({ error, message: error.detail });
  }
};
