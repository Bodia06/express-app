const yup = require('yup');

module.exports.validationError = async (err, res) => {
  if (err instanceof yup.ValidationError) {
    return res.status(422).send({ message: err.message });
  }
  return res.status(500).send({ message: 'Server error' });
};
