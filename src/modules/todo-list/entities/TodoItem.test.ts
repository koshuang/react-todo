import { TodoItem } from './TodoItem';

describe('TodoItem', () => {
  describe('constructor', () => {
    it('should generate a id', () => {
      const todoItem: TodoItem = new TodoItem('todo 1');
      expect(todoItem.id).toBeDefined();
    });
  });

  describe('of', () => {
    it('should create a TodoItem from an object', () => {
      const object = {
        id: '75442486-0878-440c-9db1-a7006c25a39f',
        title: 'Todo 1',
        completed: true,
      };
      const todoItem: TodoItem = TodoItem.of(object);
      expect(todoItem.id).toEqual(object.id);
      expect(todoItem.title).toEqual(object.title);
      expect(todoItem.completed).toEqual(object.completed);
    });
  });
})
