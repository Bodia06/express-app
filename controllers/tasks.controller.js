const createError = require('http-errors');
const { TaskDb } = require('../models');

module.exports.getTasks = (req, res) => {
  const { page, results } = req.query;
  if (!page || !results) {
    const tasks = TaskDb.getAllTasks();
    return res.status(200).send(tasks);
  }
  const tasks = TaskDb.getAllTasks(page, results);
  res.status(200).send(tasks);
};

module.exports.createTask = (req, res, next) => {
  const { body } = req.body;

  if (!body) {
    next(createError(400, 'Body is required'));
  }
  TaskDb.createTask(body);
  return res.status(201).send(TaskDb.getAllTasks());
};

module.exports.getTaskById = (req, res, next) => {
  const { id } = req.params;
  const findedTask = TaskDb.takeTaskById(id);

  if (!findedTask) {
    next(createError(404, 'Task not found'));
  }
  return res.status(200).send(findedTask);
};

module.exports.updateTask = (req, res, next) => {
  const { id } = req.params;
  const { body, isDone } = req.body;

  const findedTask = TaskDb.takeTaskById(id);

  if (!findedTask) {
    next(createError(404, 'Task not found'));
  }
  if (body === undefined || isDone === undefined) {
    next(createError(400, 'Body and isDone is required'));
  }
  TaskDb.updateTask(id, body, isDone);
  return res.status(200).send(TaskDb.getAllTasks());
};

module.exports.deleteTask = (req, res, next) => {
  const { id } = req.params;

  const findedTask = TaskDb.takeTaskById(id);

  if (!findedTask) {
    next(createError(404, 'Task not found'));
  }
  TaskDb.deleteTask(id);
  return res.status(200).send(TaskDb.getAllTasks());
};
