import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { TodoListItem, TodoItem } from '@modules/todo-list';

const editing = false;
const onUpdate = jest.fn();
const onCancel = jest.fn();

function setupTodoItem() {
  const todoItem = new TodoItem('test')

  return todoItem;
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  const todoItem = setupTodoItem();

  ReactDOM.render((
    <TodoListItem
      todoItem={todoItem}
      editing={editing}
      onUpdate={onUpdate}
      onCancel={onCancel}
    />
  ), div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  const todoItem = setupTodoItem();
  const component = shallow(
    <TodoListItem
      todoItem={todoItem}
      editing={editing}
      onUpdate={onUpdate}
      onCancel={onCancel}
    />
  );

  expect(component).toMatchSnapshot()
});
