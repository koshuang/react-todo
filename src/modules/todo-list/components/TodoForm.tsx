import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Link } from 'shared';
import { TodoItem } from 'todo-list';

const FormInput = styled.input`
  width: 235px;
  outline: none;
  font-size: 13px;
  padding-top: 7px;
  padding-bottom: 7px;
  padding-left: 10px;
`;

TodoForm.defaultProps = {
  todoItem: null,
}

export function TodoForm(props: ITodoFormProps) {
  const { todoItem, onSubmit, onCancel } = props;
  const currentTitle = todoItem && todoItem.title;
  const [value, setValue] = useState(currentTitle || '');

  return (
    <div>
      <form onSubmit={handleSubmit} data-testid="form">
        <FormInput
          value={value}
          placeholder='Enter new todo'
          onChange={e => setValue(e.target.value)}
        />
        <Button>
          { todoItem ? 'Save' : 'Add'}
        </Button>
        <Link
          onClick={() => onCancel(todoItem)}
        >
          Cancel
        </Link>
      </form>
    </div>
  );

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (!value) return;

    if (isForUpdate()) {
      todoItem.title = value;
      onSubmit(todoItem);
    } else {
      const newTodoItem: TodoItem = new TodoItem(value, false);
      onSubmit(newTodoItem);
    }


    setValue('');
  }

  function isForUpdate() {
    return !!todoItem;
  }
}

interface ITodoFormProps {
  todoItem: TodoItem;
  onSubmit(todoItem: TodoItem): void;
  onCancel(todoItem?: TodoItem): void;
}
