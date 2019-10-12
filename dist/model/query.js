"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sql_template_strings_1 = __importDefault(require("sql-template-strings"));
exports.listUsers = function () { return "\n SELECT * FROM users;\n"; };
exports.loginUser = function (_a) {
    var email = _a.email, password = _a.password;
    return sql_template_strings_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    SELECT * FROM users WHERE email=", " AND password=", " LIMIT 1;\n"], ["\n    SELECT * FROM users WHERE email=", " AND password=", " LIMIT 1;\n"])), email, password);
};
exports.userFindById = function (_a) {
    var id = _a.id;
    return sql_template_strings_1.default(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    SELECT * FROM users WHERE id=", " LIMIT 1;\n"], ["\n    SELECT * FROM users WHERE id=", " LIMIT 1;\n"])), id);
};
exports.insertUser = function (_a) {
    var email = _a.email, password = _a.password, access = _a.access, status = _a.status;
    return sql_template_strings_1.default(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  INSERT INTO users (email, password, access, status)\n  VALUES\n  (", ", ", ", ", ", ", ");\n"], ["\n  INSERT INTO users (email, password, access, status)\n  VALUES\n  (", ", ", ", ", ", ", ");\n"])), email, password, access, status);
};
/**
 * Operations
 */
exports.listOperations = function () { return "\n SELECT * FROM operations;\n"; };
exports.insertOperation = function (_a) {
    var status = _a.status, properties = _a.properties, created_by = _a.created_by;
    return sql_template_strings_1.default(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  INSERT INTO users (status, properties, created_by)\n  VALUES\n  (", ", ", ", ", ");\n"], ["\n  INSERT INTO users (status, properties, created_by)\n  VALUES\n  (", ", ", ", ", ");\n"])), status, properties, created_by);
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=query.js.map