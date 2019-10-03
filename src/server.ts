import * as express from "express";

const app = express();

app.get("/", (request, response) => {
  response.send("Express APP working");
});

app.listen(5000);
