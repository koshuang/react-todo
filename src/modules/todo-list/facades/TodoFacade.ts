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
