import bodyParser from "body-parser";
import express from "express";
import passport from "passport";
// db
import "./model/setup";
// services
import { corsConfig } from "./config/cors";
import { aclBasic } from "./config/acl";
import { ACCESS_TYPE } from "./model/accessType";
import "./services/passport";
import { getAuthor, getTest } from "./services/dummyApi";
import { userLogin, userLoginPassport } from "./services/userLogin";
import { getUsers, createUser, editUserStatus } from "./services/usersApi";
import {
  getOperations,
  createOperation,
  editOperation,
} from "./services/operationsApi";
import { getStats } from "./services/apiStats";

const app = express();
const port = process.env.PORT || 5000;

/**
 * Setup
 */
app.use(bodyParser.json());
app.use(corsConfig);
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
app.get(
  "/users",
  passport.authenticate("jwt", { session: false }),
  aclBasic([ACCESS_TYPE.ADMIN, ACCESS_TYPE.SUPERVISOR]),
  getUsers
);
app.post(
  "/users",
  passport.authenticate("jwt", { session: false }),
  aclBasic([ACCESS_TYPE.ADMIN]),
  createUser
);
app.patch(
  "/user/:id/status",
  passport.authenticate("jwt", { session: false }),
  aclBasic([ACCESS_TYPE.ADMIN, ACCESS_TYPE.SUPERVISOR]),
  editUserStatus
);

/**
 * Operations
 */
app.get(
  "/operations",
  passport.authenticate("jwt", { session: false }),
  aclBasic([ACCESS_TYPE.ADMIN, ACCESS_TYPE.SUPERVISOR, ACCESS_TYPE.OPERATOR]),
  getOperations
);
app.post(
  "/operations",
  passport.authenticate("jwt", { session: false }),
  aclBasic([ACCESS_TYPE.ADMIN, ACCESS_TYPE.SUPERVISOR, ACCESS_TYPE.OPERATOR]),
  createOperation
);
app.put(
  "/operation/:id",
  passport.authenticate("jwt", { session: false }),
  aclBasic([ACCESS_TYPE.ADMIN, ACCESS_TYPE.SUPERVISOR]),
  editOperation
);

app.get(
  "/stats",
  passport.authenticate("jwt", { session: false }),
  aclBasic([ACCESS_TYPE.ADMIN]),
  getStats
);
app.listen(port);
