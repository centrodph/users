import passport from "passport";
import jwt from "jsonwebtoken";
import { db } from "../model/setup";
import { loginUser } from "../model/query";
import { PRIVATE_KEY } from '../config'

export const userLoginPassport = async (request, response) => {
  passport.authenticate("local", { session: false }, (err, user, info) => {
    if (err || !user) {
      return response.status(403);
    }
    request.login(user, { session: false }, (loginError: string) => {
      if (loginError) {
        response.send(err);
      }
      const token = jwt.sign(user, PRIVATE_KEY);
      return response.json({ user, token });
    });
  })(request, response);
};

export const userLogin = async (request, response) => {
  try {
    const { email, password } = request.body;
    const { rows } = await db.query(loginUser({ email }));
    const user = rows[0];
    if (!user) {
      return response.status(403).json({});
    }
    response.status(200).send(user);
  } catch (error) {
    response.status(500).send();
  }
};
