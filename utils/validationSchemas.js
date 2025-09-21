const yup = require('yup');

const BODY_VALIDATION_SCHEMA = yup
  .string()
  .min(3, 'Body must be at least 3 characters long')
  .max(100, 'Body must be at most 100 characters long')
  .trim();

module.exports.CREATE_TASK_VALIDATION_SCHEMA = yup.object({
  body: BODY_VALIDATION_SCHEMA.required('Body is required'),
});

module.exports.UPDATE_TASK_VALIDATION_SCHEMA = yup.object({
  body: BODY_VALIDATION_SCHEMA,
  isDone: yup.boolean().default(false),
});
