import * as express from "express";

const app = express();
const port = process.env.PORT || 5000;



app.get("/", (request, response) => {
  response.send("Express APP working");
});

app.listen(port);
