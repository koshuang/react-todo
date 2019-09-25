import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '@modules/shared';
import { TodoForm, TodoItem } from '@modules/todo-list';

interface IAddTodoProps {
  onTodoAdded(todoItem: TodoItem): void;
}

const Container = styled.div`
  padding-top: 5px;
  padding-bottom: 5px;
`;

export function AddTodo(props: IAddTodoProps) {
  const { onTodoAdded } = props;
  const [editing, setEditing] = useState(false);

  return (
    <Container>
      {editing && (
        <TodoForm
          onSubmit={handleSubmit}
          onCancel={() => setEditing(false)}
        />
      )}

      {!editing && (
        <>
          <Button
            primary
            onClick={() => setEditing(true)}
          >
            Add Todo
          </Button>
        </>
      )}
    </Container>
  );

  function handleSubmit(todoItem: TodoItem) {
    onTodoAdded(todoItem);
    setEditing(false);
  }
}
