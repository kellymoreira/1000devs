// GERENCIADOR DE TAREFAS

/************************************************************************************************************************
 *
 * Criar uma classe Tarefa que representa uma tarefa com propriedades como título, descrição e data de vencimento.
 * Em seguida, criar um objeto GerenciadorDeTarefas que permite criar métodos para adicionar, remover e listar tarefas.
 *
 ************************************************************************************************************************/

// Class
class Task {
  constructor(title, description, dueDate) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
  }
}

// Class
class TaskManager {
  constructor() {
    this.tasks = [];
  }

  // Method to add a new task
  addTask(task) {
    this.tasks.push(task);
  }

  // Method to remove a task by title
  removeTask(title) {
    this.tasks = this.tasks.filter((task) => task.title !== title);
  }

  // Method to list all tasks
  listTasks() {
    console.log("Task List:");
    this.tasks.forEach((task) => {
      console.log(
        `Title: ${task.title}, Description: ${task.description}, Due Date: ${task.dueDate}`
      );
    });
  }
}

// Object from the class Task Manager
const management = new TaskManager();

// Creating some tasks
const firstTask = new Task(
  "Buy coffee powder",
  "Go to the supermarket",
  "2024-01-10"
);
const secondTask = new Task(
  "Study programming",
  "Read documentation and practice",
  "2024-01-15"
);

// Calls the Add Task Method to add new tasks to the management
management.addTask(firstTask);
management.addTask(secondTask);

// Listing tasks
management.listTasks();

// Removing a task by title (In this case, "Buy coffee powder")
management.removeTask("Buy coffee powder");

// Listing tasks (again) after removal
management.listTasks();
