const mongoose = require('mongoose');
const validatorManager = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    default: 'Жак-Ив Кусто',
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return validatorManager.isEmail(v);
      },
    },
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  about: {
    type: String,
    minlength: 2,
    maxlength: 30,
    default: 'Исследователь',
  },
  avatar: {
    type: String,
    validate: {
      validator(v) {
        return /^(http:\/\/|https:\/\/)(www\.)?.+\..+\/?[\d\w\-._~:/?[\]@!$&'()*+,;=](#)?$/.test(
          v,
        );
      },
    },
    default: 'https://pictures.s3.yandex.net/resources/jacques-cousteau_1604399756.png',
  },
});

module.exports = mongoose.model('user', userSchema);
