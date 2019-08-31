import '@testing-library/jest-dom/extend-expect';
import {render, fireEvent} from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { TodoForm } from './TodoForm';

const onSubmit = jest.fn();
const onCancel = jest.fn();

function setUpForm() {
  return render(
    <TodoForm onSubmit={onSubmit} onCancel={onCancel} />
  );
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TodoForm onSubmit={onSubmit} onCancel={onCancel} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  const component = shallow(<TodoForm onSubmit={onSubmit} onCancel={onCancel} />)
  expect(component).toMatchSnapshot()
});

it('should has a Add button', () => {
  const { getByText } = setUpForm();
  const button = getByText('Add');

  expect(button).toBeDefined;
});

it('should has a Cancel button', () => {
  const { getByText } = setUpForm();
  const button = getByText('Cancel');

  expect(button).toBeDefined;
});

it('should clear the input after form submit', () => {
  const { getByPlaceholderText, getByTestId } = setUpForm();
  const input = getByPlaceholderText(/Enter/);

  fireEvent.change(getByPlaceholderText(/Enter/i), {target: {value: 'chuck'}})
  fireEvent.submit(getByTestId('form'));

  expect(input.value).toEqual('');
});
