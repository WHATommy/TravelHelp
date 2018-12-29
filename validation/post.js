const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatePostInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : '';
  data.country = !isEmpty(data.country) ? data.country : '';
  data.text = !isEmpty(data.text) ? data.text : '';

  if (Validator.isEmpty(data.title)) {
    errors.title = 'Title is required';
  }

  if (Validator.isEmpty(data.country)) {
    errors.country = 'Country is required';
  }

  if (!Validator.isLength(data.text, { min: 1, max: 2500 })) {
    errors.text = 'Post must be between 1 and 2000 characters';
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = 'Text field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
