const express = require('express');
const { tasksController } = require('./controllers');
const { validation } = require('./middleware');

const app = express();

app.use(express.json());

app.get('/tasks', tasksController.getTasks);
app.get('/tasks/:id', tasksController.getTaskById);
app.post(
  '/tasks',
  validation.validationTaskOnCreate,
  tasksController.createTask
);
app.put(
  '/tasks/:id',
  validation.validationTaskOnUpdate,
  tasksController.updateTask
);
app.delete('/tasks/:id', tasksController.deleteTask);

module.exports = app;
