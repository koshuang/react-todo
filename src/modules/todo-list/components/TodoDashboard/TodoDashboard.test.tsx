import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { TodoDashboard } from './TodoDashboard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TodoDashboard />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  const component = shallow(<TodoDashboard />)
  expect(component).toMatchSnapshot()
})
