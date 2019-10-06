import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import passport from "passport";
// services
import "services/passport";
import { getAuthor, getTest } from "services/dummyApi";
import { userLogin, userLoginPassport } from "services/userLogin";
import { getUsers } from "services/usersApi";

const app = express();
const port = process.env.PORT || 5000;

/**
 * Setup body parser
 */
app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);
/**
 * Dummy APIS
 */
app.get("/author", getAuthor);
app.get("/", getTest);

/**
 * Users list
 */
app.post("/auth", userLoginPassport);
app.post("/user", userLogin);
app.get("/users", passport.authenticate("jwt", { session: false }), getUsers);

/**
 * Operations
 */

app.listen(port);
