const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;

/**
 * Setup body parser
 */
app.use(bodyParser.json());

/**
 * Dummy Json
 */
app.get("/json", (request, response) => {
  response.send({
    author: "Gerardo Perrucci",
    email: "centrodph@gmail.com"
  });
});
/**
 * Dummy route
 */
app.get("/", (request, response) => {
  response.send("Express APP working");
});

app.listen(port);
