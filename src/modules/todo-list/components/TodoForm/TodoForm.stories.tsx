import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { TodoForm, TodoItem } from '@modules/todo-list';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

const todoItem = {
  id: 'x',
  title: 'Task 1',
  completed: false,
};

interface Props {
  todoItem?: TodoItem;
}

const Consumer: React.FC<Props> = ({ todoItem }) => {
  return (
    <TodoForm todoItem={todoItem} onSubmit={action('submitted')} onCancel={action('canceled')} />
  );
};

storiesOf('Modules|TodoForm', module)
  .add('new', () => <Consumer />)
  .add('edit', () => <Consumer todoItem={todoItem} />);
