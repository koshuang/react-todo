import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { TodoList, TodoItem } from '@modules/todo-list';

function setupTodoItems() {
  const todoItems: TodoItem[] = [
    new TodoItem('test'),
  ];

  return todoItems;
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  const todoItems: TodoItem[] = setupTodoItems();

  ReactDOM.render(<TodoList todoItems={todoItems} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  const todoItems: TodoItem[] = setupTodoItems();
  const component = shallow(<TodoList todoItems={todoItems} />)
  expect(component).toMatchSnapshot()
})

it('renders todo items', () => {
  const todoItems: TodoItem[] = setupTodoItems();
  const wrapper = shallow(<TodoList todoItems={todoItems} />);
  // expect(wrapper.contains('test')).toEqual(true);
});
