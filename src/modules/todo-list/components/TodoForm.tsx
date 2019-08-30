import React, { useState } from 'react';
import styled from 'styled-components';
import { TodoItem } from '../entities';

const FormInput = styled.input`
  width: 235px;
  outline: none;
  font-size: 13px;
  padding-top: 7px;
  padding-bottom: 7px;
  padding-left: 10px;
`;

export function TodoForm(props: ITodoFormProps) {
  const { onSubmit } = props;
  const [value, setValue] = useState('');

  return (
    <div>
      <p>Enter your todo and hit the Enter key </p>
      <form onSubmit={handleSubmit} data-testid="form">
        <FormInput
          value={value}
          placeholder='Enter new todo'
          onChange={e => setValue(e.target.value)}
        />
      </form>
    </div>
  );

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (!value) return;

    const todoItem: TodoItem = new TodoItem(value, false);

    onSubmit(todoItem);
    setValue('');
  }
}

interface ITodoFormProps {
  onSubmit(todoItem: TodoItem): void;
}
