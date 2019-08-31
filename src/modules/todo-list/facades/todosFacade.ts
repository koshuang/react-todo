import { TodoItem } from 'todo-list';
import { TodoService } from '../services/TodoService';

class TodosFacade {
  protected todoService: TodoService;

  constructor() {
    this.todoService = new TodoService();
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

  delete(todoItem: TodoItem) {
    return this.todoService.delete(todoItem);
  }

  getFilteredTodoItems(filter: string) {
    const items = this.getAllTodoItems();

    if (filter === 'ongoing') {
      return items.filter((item: TodoItem) => !item.completed);
    } else if (filter === 'completed') {
      return items.filter((item: TodoItem) => item.completed);
    }

    return items;
  }
}

export const todosFacade = new TodosFacade();
