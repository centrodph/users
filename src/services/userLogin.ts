import passport from "passport";
import jwt from "jsonwebtoken";
import { db } from "../model/setup";
import { loginUser } from "../model/query";

export const userLoginPassport = async (request, response) => {
  passport.authenticate("local", { session: false }, (err, user, info) => {
    if (err || !user) {
      return response.status(400).json({
        message: "Something is not right",
        user: user
      });
    }
    request.login(user, { session: false }, err => {
      if (err) {
        response.send(err);
      }
      // generate a signed son web token with the contents of user object and return it in the response
      const token = jwt.sign(user, "your_jwt_secret");
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
