import { TodoItem } from '@modules/todo-list';
import { TodoService } from './TodoService';

describe('TodoService', () => {
  function setupTodoService() {
    const todoService = new TodoService();
    const todoItem = new TodoItem('todo 1');
    const rawJson = JSON.stringify([todoItem]);
    localStorage.setItem(TodoService.LOCAL_STORAGE_KEY, rawJson);

    todoService.loadFromLocalStorage();

    return todoService;
  }

  function expectTodoItems(todoService: TodoService, size: number) {
    todoService.loadFromLocalStorage();
    expect(todoService.getAllTodoItems().length).toEqual(size);
  }

  describe('loadFromLocalStorage', () => {
    it('should load todo items from localStorage', () => {
      const todoService: TodoService = setupTodoService();
      const todoItems = todoService.getAllTodoItems();

      expect(todoItems.length).toEqual(1);
      expect(todoItems[0]).toBeInstanceOf(TodoItem);
    });
  });

  describe('getAllTodoItems', () => {
    it('should return all todo items', () => {
      const todoService: TodoService = setupTodoService();
      const todoItems: TodoItem[] = todoService.getAllTodoItems();
      expect(todoItems.length).toEqual(1);
    });
  });

  describe('add', () => {
    it('should add a TodoItem to localStorage', () => {
      const todoService: TodoService = setupTodoService();
      const todoItem = new TodoItem('todo 2');

      todoService.add(todoItem);

      const todoItems: TodoItem[] = todoService.getAllTodoItems();
      expectTodoItems(todoService, 2);
    });
  });

  describe('update', () => {
    it('should update a TodoItem to localStorage', () => {
      const todoService: TodoService = setupTodoService();
      let todoItems = todoService.getAllTodoItems();
      let todoItem = todoItems[0];

      todoItem.completed = true;

      todoService.update(todoItem);

      todoItems = todoService.getAllTodoItems();
      todoItem = todoItems[0];

      expect(todoItem.completed).toBeTruthy();
    });
  });
})
