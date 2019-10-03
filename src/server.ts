const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;
const pool = require('./model/setup');

/**
 * Setup body parser
 */
app.use(bodyParser.json());

/**
 * Dummy Json
 */
app.get('/json', (request, response) => {
  response.send({
    author: 'Gerardo Perrucci',
    email: 'centrodph@gmail.com',
  });
});
/**
 * Dummy route
 */
app.get('/', (request, response) => {
  response.send('Express APP working');
});

/**
 * Users
 */
app.get('/users', (request, response) => {

  response.send('hot');
});

app.listen(port);
