const { TaskDb } = require('../models');

module.exports.getTasks = (req, res) => {
  const tasks = TaskDb.getAllTasks();
  res.status(200).send(tasks);
};

module.exports.createTask = (req, res) => {
  const { body } = req.body;

  if (!body) {
    return res.status(400).send({ message: 'Body is required' });
  }
  TaskDb.createTask(body);
  return res.status(201).send({ message: 'Task created' });
};

module.exports.takeTaskById = (req, res) => {
  const { id } = req.params;
  const findedTask = TaskDb.takeTaskById(id);

  if (!findedTask) {
    return res.status(404).send({ message: 'Task not found' });
  }
  return res.status(200).send(findedTask);
};

module.exports.updateTask = (req, res) => {
  const { id } = req.params;
  const { body, isDone } = req.body;

  const findedTask = TaskDb.takeTaskById(id);

  if (!findedTask) {
    return res.status(404).send({ message: 'Task not found' });
  }
  TaskDb.updateTask(id, body, isDone);
  return res.status(200).send({ message: 'Task updated' });
};

module.exports.deleteTask = (req, res) => {
  const { id } = req.params;

  const findedTask = TaskDb.takeTaskById(id);

  if (!findedTask) {
    return res.status(404).send({ message: 'Task not found' });
  }
  TaskDb.deleteTask(id);
  return res.status(200).send({ message: 'Task deleted' });
};
