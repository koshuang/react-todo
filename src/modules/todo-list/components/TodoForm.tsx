import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Link } from 'shared';
import { TodoItem } from 'todo-list';

interface ITodoFormProps {
  todoItem: TodoItem;
  onSubmit(todoItem: TodoItem): void;
  onCancel(todoItem?: TodoItem): void;
}

const Container = styled.div`
  margin-bottom: 9px;

  .submit {
    margin-right: 5px;
  }
`;

const FormInput = styled.input`
  width: 500px;
  outline: none;
  font-size: 14px;
  padding-top: 7px;
  padding-bottom: 7px;
  margin-bottom: 6px;
`;

TodoForm.defaultProps = {
  todoItem: null,
}

export function TodoForm(props: ITodoFormProps) {
  const { todoItem, onSubmit, onCancel } = props;
  const currentTitle = todoItem && todoItem.title;
  const [value, setValue] = useState(currentTitle || '');

  return (
    <Container>
      <form onSubmit={handleSubmit} data-testid="form">
        <FormInput
          value={value}
          placeholder='Enter new todo'
          onChange={e => setValue(e.target.value)}
        />
        <span className="operations">
          <Button className="submit">
            { todoItem ? 'Save' : 'Add'}
          </Button>
          <Link
            onClick={() => onCancel(todoItem)}
          >
            Cancel
          </Link>
        </span>
      </form>
    </Container>
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
