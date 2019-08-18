"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router = function (app) {
    app.get("/", function (req, res) {
        res.send("Home!");
    });
    app.get("/hello", function (req, res) {
        res.send("Hello World!");
    });
};
exports.default = router;
