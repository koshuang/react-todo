import '@testing-library/jest-dom/extend-expect';
import {render, fireEvent} from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { AddTodo } from './AddTodo';

const onTodoAdded = jest.fn();

function setup() {
  return render(
    <AddTodo onTodoAdded={onTodoAdded} />
  );
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddTodo onTodoAdded={onTodoAdded} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  const component = shallow(<AddTodo onTodoAdded={onTodoAdded} />)
  expect(component).toMatchSnapshot()
});

it('should has a `Add Todo` button', () => {
  const { getByText } = setup();
  const button = getByText('Add Todo');

  expect(button).toBeDefined;
});
