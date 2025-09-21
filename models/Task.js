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
  {
    id: 2,
    body: 'Task 3',
    isDone: false,
  },
  {
    id: 3,
    body: 'Task 4',
    isDone: true,
  },
  {
    id: 4,
    body: 'Task 5',
    isDone: false,
  },
  {
    id: 5,
    body: 'Task 6',
    isDone: true,
  },
  {
    id: 6,
    body: 'Task 7',
    isDone: false,
  },
  {
    id: 7,
    body: 'Task 8',
    isDone: true,
  },
  {
    id: 8,
    body: 'Task 9',
    isDone: false,
  },
  {
    id: 9,
    body: 'Task 10',
    isDone: true,
  },
  {
    id: 10,
    body: 'Task 11',
    isDone: false,
  },
  {
    id: 11,
    body: 'Task 12',
    isDone: true,
  },
];

class TasksDB {
  constructor (arr) {
    this.tasks = arr;
  }

  getAllTasks (page, results) {
    if (!page || !results) {
      return [...this.tasks];
    }
    return [...this.tasks.splice((page - 1) * results, page * results)];
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
