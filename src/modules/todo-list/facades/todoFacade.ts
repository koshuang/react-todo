import { TodoItem } from '@modules/todo-list';
import { TodoService } from '../services/TodoService';

class TodoFacade {
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

export const todoFacade = new TodoFacade();
