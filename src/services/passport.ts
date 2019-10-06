import passport from "passport";
import { Strategy } from "passport-local";
import passportJWT from "passport-jwt";
import { db } from "../model/setup";
import { loginUser, userFindById } from "../model/query";
import { PRIVATE_KEY } from "../config";

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

const extractJWT = passportJWT.ExtractJwt;
passport.use(
  new passportJWT.Strategy(
    {
      jwtFromRequest: extractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: PRIVATE_KEY,
    },
    async (jwtPayload, cb) => {
      console.log("Jwt auth");
      try {
        const { rows } = await db.query(userFindById({ id: jwtPayload.id }));
        const user = rows[0];
        if (!user) {
          return cb(null, false, { message: "Wrong token" });
        }
        return cb(null, user);
      } catch (error) {
        return cb(null, false, { message: "Invalid request" });
      }
    }
  )
);
