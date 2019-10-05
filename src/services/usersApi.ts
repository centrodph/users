import passport from "passport";
import jwt from "jsonwebtoken";
import { db } from "../model/setup";
import { listUsers } from "../model/query";

export const getUsers = async (request, response) => {
  const { rows } = await db.query(listUsers());
  response.send(rows);
};
