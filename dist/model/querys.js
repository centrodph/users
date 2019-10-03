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
exports.listUsers = function () { return sql_template_strings_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n SELECT * FROM users;\n"], ["\n SELECT * FROM users;\n"]))); };
var templateObject_1;
//# sourceMappingURL=querys.js.map