require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Console = require('console');
const { celebrate, Joi, errors } = require('celebrate');
const auth = require('./middlewares/auth');
const error = require('./middlewares/error');
const userRouter = require('./routes/users');
const cardRouter = require('./routes/cards');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { PORT } = require('./utils/constants');
const { login, createUser } = require('./controllers/users');
const NotFoundError = require('./errors/not-found-error');

const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
});
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(requestLogger);
const allowedCors = [
  'http://mestofront.nem.nomoredomains.work',
  'https://mestofront.nem.nomoredomains.work',
  'localhost:3000',
  'http://localhost:3000',
];

app.use((req, res, next) => {
  const { origin } = req.headers;
  const requestHeaders = req.headers['access-control-request-headers'];
  const { method } = req;
  const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';
  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Credentials', true);
  }

  if (method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    res.header('Access-Control-Allow-Headers', requestHeaders);
    return res.end();
  }

  return next();
});
app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.post('/signin', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
}), login);

app.post('/signup', celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).allow(''),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
    avatar: Joi.string().empty().allow('')
      .regex(/^(http:\/\/|https:\/\/)(www\.)?.+\..+\/?[\d\w\-._~:/?[\]@!$&'()*+,;=](#)?$/),
    about: Joi.string().min(2).max(30).allow(''),
  }),
}), createUser);

app.use(auth);

app.get('/signout', (req, res) => {
  res.status(200).clearCookie('token', { domain: 'mestofront.nem.nomoredomains.work' }).end();
});
app.use('/users', userRouter);
app.use('/cards', cardRouter);
app.use('*', (req, res, next) => {
  next(new NotFoundError('Такой страницы не существует'));
});
app.use(errorLogger);
app.listen(PORT, () => {
  Console.log(`App listening on port ${PORT}`);
});
app.use(errors());
app.use(error);
