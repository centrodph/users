import passport from "passport";
import { Strategy } from "passport-local";
import { db } from "../model/setup";
import { loginUser } from "../model/query";

passport.use(
  new Strategy(
    {
      usernameField: "email",
      passwordField: "password"
    },
    async (email, password, cb) => {
      try {
        const { rows } = await db.query(loginUser({ email, password }));
        const user = rows[0];
        if (!user) {
          return cb(null, false, { message: "Incorrect email or password." });
        }
        return cb(null, user, { message: "Logged In Successfully" });
      } catch (error) {
        return cb(null, false, { message: "Invalid request" });
      }
    }
  )
);
