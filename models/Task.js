const { v4: uuidv4 } = require('uuid');

const tasksDB = [
  {
    id: 0,
    body: 'Task 1',
    isDone: false,
  },
  {
    id: 1,
    body: 'Task 2',
    isDone: true,
  },
];

class TasksDB {
  constructor (arr) {
    this.tasks = arr;
  }

  getAllTasks () {
    return [...this.tasks];
  }

  createTask (body) {
    const newTask = { id: uuidv4(), body, isDone: false };
    this.tasks.push(newTask);
  }

  takeTaskById (id) {
    return this.tasks.find(task => String(task.id) === String(id));
  }

  updateTask (id, body, isDone) {
    const takeTaskToUpdate = this.takeTaskById(id);
    if (takeTaskToUpdate) {
      if (body !== undefined) {
        takeTaskToUpdate.body = body;
      }
      if (isDone !== undefined) {
        takeTaskToUpdate.isDone = isDone;
      }
    }
  }

  deleteTask (id) {
    const findedTask = this.takeTaskById(id);
    findedTask ? this.tasks.splice(this.tasks.indexOf(findedTask), 1) : null;
  }
}

const tasksDbInstance = new TasksDB(tasksDB);

module.exports = tasksDbInstance;
