import '@testing-library/jest-dom/extend-expect';
import {render, fireEvent} from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { TodoForm } from './TodoForm';

const addTodoItem = jest.fn();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TodoForm onSubmit={addTodoItem} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  const component = shallow(<TodoForm onSubmit={addTodoItem} />)
  expect(component).toMatchSnapshot()
});

it('should clear the input after form submit', () => {
  const {getByPlaceholderText, getByTestId} = render(
    <TodoForm onSubmit={addTodoItem} />
  );
  const input = getByPlaceholderText(/Enter/);

  fireEvent.change(getByPlaceholderText(/Enter/i), {target: {value: 'chuck'}})
  fireEvent.submit(getByTestId('form'));

  expect(input.value).toEqual('');
});
