const userRouter = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  getUsers, getUser, updateProfile, updateAvatar, getCurrentUser,
} = require('../controllers/users');

userRouter.get('/', getUsers);

userRouter.get('/me', getCurrentUser);

userRouter.patch('/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    about: Joi.string().min(2).max(30).required(),
  }),
}), updateProfile);

userRouter.patch('/me/avatar', celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().required()
      .regex(/^(http:\/\/|https:\/\/)(www\.)?.+\..+\/?[\d\w\-._~:/?[\]@!$&'()*+,;=](#)?$/),
  }),
}), updateAvatar);

userRouter.get('/:id', celebrate({
  params: Joi.object().keys({
    id: Joi.string().hex().length(24).required(),
  }),
}), getUser);

module.exports = userRouter;
