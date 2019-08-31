import { TodoItem, TodoService } from 'todo-list';

export class TodoFacade {
  protected todoService: TodoService = new TodoService();

  constructor() {
    this.todoService.loadFromLocalStorage();
  }

  getAllTodoItems() {
    return this.todoService.getAllTodoItems();
  }

  add(todoItem: TodoItem) {
    return this.todoService.add(todoItem);
  }

  update(todoItem: TodoItem) {
    return this.todoService.update(todoItem);
  }
}
