import produce from 'immer';
import { TodoItem } from 'todo-list';

export class TodoService {
  static LOCAL_STORAGE_KEY = 'react-todo';
  protected todoItemMap: Map<string, TodoItem> = new Map();

  loadFromLocalStorage():void {
    const json = localStorage.getItem(TodoService.LOCAL_STORAGE_KEY) || '[]';
    const todoObjects = JSON.parse(json) || [];

    todoObjects.forEach((object:any) => {
      if (! object.id) {
        throw new Error(`Missing id of object: ${JSON.stringify(object)}`);
      }

      this.todoItemMap.set(object.id, TodoItem.of(object));
    });
  }

  getAllTodoItems(): TodoItem[] {
    return Array.from(this.todoItemMap.values());
  }

  add(todoItem: TodoItem) {
    if (! todoItem.id) {
      throw new Error(`Missing id of todoItem: ${JSON.stringify(todoItem)}`);
    }

    this.todoItemMap = produce(this.todoItemMap, draftState => {
      draftState.set(todoItem.id, todoItem);
    });
    this.saveToLocal();
  }

  update(todoItem: TodoItem) {
    this.todoItemMap = produce(this.todoItemMap, draftState => {
      draftState.set(todoItem.id, todoItem);
    });
    this.saveToLocal();
  }

  protected saveToLocal() {
    const rawJson = JSON.stringify(this.getAllTodoItems());
    localStorage.setItem(TodoService.LOCAL_STORAGE_KEY, rawJson);
  }
}
