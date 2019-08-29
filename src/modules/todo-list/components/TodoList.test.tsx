import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { TodoList } from './TodoList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TodoList />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  const component = shallow(<TodoList />)
  expect(component).toMatchSnapshot()
})

it('renders welcome message', () => {
  const wrapper = shallow(<TodoList />);
  const welcome = <div>hi</div>;
  expect(wrapper.contains(welcome)).toEqual(true);
});
