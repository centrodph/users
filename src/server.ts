import bodyParser from 'body-parser';
import express from 'express';
import { listUsers } from './model/query';
import { db } from './model/setup';

const app = express();
const port = process.env.PORT || 5000;

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
app.get('/users', async (request, response) => {
  const { rows } = await db.query(listUsers());
  response.send(rows);
});

app.listen(port);
