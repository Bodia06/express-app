const {
  CREATE_TASK_VALIDATION_SCHEMA,
  UPDATE_TASK_VALIDATION_SCHEMA,
} = require('../utils/validationSchemas');

module.exports.validationTaskOnCreate = async (req, res, next) => {
  const { body } = req;

  try {
    const validatedTask = await CREATE_TASK_VALIDATION_SCHEMA.validate(body);
    req.body = validatedTask;
    next();
  } catch (err) {
    next(err);
  }

  next();
};

module.exports.validationTaskOnUpdate = async (req, res, next) => {
  const { body } = req;

  try {
    const validatedTask = await UPDATE_TASK_VALIDATION_SCHEMA.validate(body);
    req.body = validatedTask;
    next();
  } catch (err) {
    next(err);
  }

  next();
};
