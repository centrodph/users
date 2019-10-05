import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import { listUsers } from './model/query';
import { db } from './model/setup';
// services
import './services/passport';
import { userLogin, userLoginPassport } from './services/userLogin';

const app = express();
const port = process.env.PORT || 5000;

/**
 * Setup body parser
 */
app.use(bodyParser.json());
app.use(cors({
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204,
}));
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
 * Users list
 */
app.get('/users', async (request, response) => {
  const { rows } = await db.query(listUsers());
  response.send(rows);
});

/**
 * Login user
 */
app.post('/auth', userLoginPassport);
 app.post('/user', userLogin);

app.listen(port);
