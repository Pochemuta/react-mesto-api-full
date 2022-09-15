const router = require('express').Router();
const {
  getCards, postCard, deleteCard, putCardLike, deleteCardLike,
} = require('../controllers/cards');
const { cardsValididty, idValidity } = require('../middlewares/validation');

router.get('/', getCards);
router.post('/', cardsValididty, postCard);
router.delete('/:id', idValidity, deleteCard);
router.put('/:id/likes', idValidity, putCardLike);
router.delete('/:id/likes', idValidity, deleteCardLike);

module.exports = router;
