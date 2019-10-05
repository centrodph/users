import jwt from "jsonwebtoken";
import passport from "passport";
import { PRIVATE_KEY } from "../config";
import { loginUser } from "../model/query";
import { db } from "../model/setup";

export const userLoginPassport = async (request, response) => {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    if (err || !user) {
      return response.status(403).send(err);
    }
    request.login(user, { session: false }, (loginError: string) => {
      if (loginError) {
        return response.send(err);
      }
      const token = jwt.sign(user, PRIVATE_KEY);
      return response.json({ user, token });
    });
  })(request, response);
};

export const userLogin = async (request, response) => {
  try {
    const { email, password } = request.body;
    const { rows } = await db.query(loginUser({ email, password }));
    const user = rows[0];
    if (!user) {
      return response.status(403).send();
    }
    return response.status(200).send(user);
  } catch (error) {
    return response.status(500).send();
  }
};
