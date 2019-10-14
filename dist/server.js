"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var body_parser_1 = __importDefault(require("body-parser"));
var express_1 = __importDefault(require("express"));
var passport_1 = __importDefault(require("passport"));
// db
require("./model/setup");
// services
var cors_1 = require("./config/cors");
var acl_1 = require("./config/acl");
var accessType_1 = require("./model/accessType");
require("./services/passport");
var dummyApi_1 = require("./services/dummyApi");
var userLogin_1 = require("./services/userLogin");
var usersApi_1 = require("./services/usersApi");
var operationsApi_1 = require("./services/operationsApi");
var apiStats_1 = require("./services/apiStats");
var app = express_1.default();
var port = process.env.PORT || 5000;
/**
 * Setup
 */
app.use(body_parser_1.default.json());
app.use(cors_1.corsConfig);
/**
 * Dummy APIS
 */
app.get("/author", dummyApi_1.getAuthor);
app.get("/", dummyApi_1.getTest);
/**
 * Users list
 */
app.post("/auth", userLogin_1.userLoginPassport);
app.post("/user", userLogin_1.userLogin);
app.get("/users", passport_1.default.authenticate("jwt", { session: false }), acl_1.aclBasic([accessType_1.ACCESS_TYPE.ADMIN, accessType_1.ACCESS_TYPE.SUPERVISOR]), usersApi_1.getUsers);
app.post("/users", passport_1.default.authenticate("jwt", { session: false }), acl_1.aclBasic([accessType_1.ACCESS_TYPE.ADMIN]), usersApi_1.createUser);
app.patch("/user/:id/status", passport_1.default.authenticate("jwt", { session: false }), acl_1.aclBasic([accessType_1.ACCESS_TYPE.ADMIN, accessType_1.ACCESS_TYPE.SUPERVISOR]), usersApi_1.editUserStatus);
/**
 * Operations
 */
app.get("/operations", passport_1.default.authenticate("jwt", { session: false }), acl_1.aclBasic([accessType_1.ACCESS_TYPE.ADMIN, accessType_1.ACCESS_TYPE.SUPERVISOR, accessType_1.ACCESS_TYPE.OPERATOR]), operationsApi_1.getOperations);
app.post("/operations", passport_1.default.authenticate("jwt", { session: false }), acl_1.aclBasic([accessType_1.ACCESS_TYPE.ADMIN, accessType_1.ACCESS_TYPE.SUPERVISOR, accessType_1.ACCESS_TYPE.OPERATOR]), operationsApi_1.createOperation);
app.put("/operation/:id", passport_1.default.authenticate("jwt", { session: false }), acl_1.aclBasic([accessType_1.ACCESS_TYPE.ADMIN, accessType_1.ACCESS_TYPE.SUPERVISOR]), operationsApi_1.editOperation);
app.get("/stats", passport_1.default.authenticate("jwt", { session: false }), acl_1.aclBasic([accessType_1.ACCESS_TYPE.ADMIN]), apiStats_1.getStats);
app.listen(port);
//# sourceMappingURL=server.js.map