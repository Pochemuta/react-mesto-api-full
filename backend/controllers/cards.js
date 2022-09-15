const mongoose = require('mongoose');
const Card = require('../models/cards');
const BadRequestError = require('../errors/bad-request-error');
const ForbiddenError = require('../errors/forbidden-error');
const NotFoundError = require('../errors/not-found-error');

module.exports.getCards = (req, res, next) => {
  Card.find({})
    .then((cards) => res.send(cards))
    .catch(next);
};

module.exports.createCard = (req, res, next) => {
  const { name, link } = req.body;
  Card.create({ name, link, owner: req.user._id })
    .then((card) => res.send(card))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError(err.message));
      } else {
        next(err);
      }
    });
};

module.exports.deleteCard = (req, res, next) => {
  Card.findById(req.params.cardId)
    .orFail(new NotFoundError('Карточка не найдена'))
    .then((card) => {
      if (String(card.owner) !== req.user._id) {
        return Promise.reject(new ForbiddenError('Нет прав для удаления карточки'));
      }
      return Card.deleteOne(card)
        .then(() => res.send(JSON.stringify({ message: 'Success' })));
    })
    .catch(next);
};

module.exports.likeCard = (req, res, next) => {
  Card.findByIdAndUpdate(req.params.cardId, { $addToSet: { likes: req.user._id } }, { new: true })
    .orFail(new mongoose.Error.DocumentNotFoundError('Карточка не найдена'))
    .then((card) => {
      res.send(card);
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError(err.message));
      } else if (err.name === 'DocumentNotFoundError') {
        next(new NotFoundError(err.message));
      } else {
        next(err);
      }
    });
};

module.exports.dislikeCard = (req, res, next) => {
  Card.findByIdAndUpdate(req.params.cardId, { $pull: { likes: req.user._id } }, { new: true })
    .orFail(new mongoose.Error.DocumentNotFoundError('Карточка не найдена'))
    .then((card) => {
      res.send(card);
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError(err.message));
      } else if (err.name === 'DocumentNotFoundError') {
        next(new NotFoundError(err.message));
      } else {
        next(err);
      }
    })
    .catch(next);
};
