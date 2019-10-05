"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var express_1 = __importDefault(require("express"));
var passport_1 = __importDefault(require("passport"));
var query_1 = require("./model/query");
// services
require("./services/passport");
var userLogin_1 = require("./services/userLogin");
var app = express_1.default();
var port = process.env.PORT || 5000;
/**
 * Setup body parser
 */
app.use(body_parser_1.default.json());
app.use(cors_1.default({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
}));
/**
 * Dummy Json
 */
app.get('/json', function (request, response) {
    response.send({
        author: 'Gerardo Perrucci',
        email: 'centrodph@gmail.com',
    });
});
/**
 * Dummy route
 */
app.get('/', function (request, response) {
    response.send('Express APP working');
});
/**
 * Users list
 */
app.get('/users', passport_1.default.authenticate('jwt', { session: false }), query_1.listUsers);
/**
 * Login user
 */
app.post('/auth', userLogin_1.userLoginPassport);
app.post('/user', userLogin_1.userLogin);
app.listen(port);
//# sourceMappingURL=server.js.map