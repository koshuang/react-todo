import uuid from 'uuidv4';

export class TodoItem {
  id: string;
  title: string;
  completed: boolean;

  constructor(title: string, completed: boolean = false) {
    this.id = uuid();
    this.title = title;
    this.completed = completed;
  }

  static of(object: any) {
    const todoItem = new TodoItem(object.title, object.completed);
    todoItem.id = object.id;
    todoItem.completed = object.completed;

    return todoItem;
  }
}
