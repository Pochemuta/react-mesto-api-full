const jwt = require('jsonwebtoken');
const SigninErr = require('../utils/signin-err');

const { NODE_ENV, JWT_SECRET } = process.env;

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    next(new SigninErr('Нужна авторизация'));
  }

  const token = authorization.replace('Bearer ', '');
  let payload;

  try {
    payload = jwt.verify(token, `${NODE_ENV === 'production' ? JWT_SECRET : 'DarkwingDuck255%'}`);
    req.user = payload;
  } catch (err) {
    next(new SigninErr('Нужна авторизация'));
  }

  next();
};
