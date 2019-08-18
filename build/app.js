"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// lib/app.ts
var express = require("express");
var router_1 = __importDefault(require("./router"));
// Create a new express application instance
var app = express();
router_1.default(app);
app.listen(3000, function () {
    console.log("Example app listening on port 3000!");
});
