import React, { useState } from 'react';
import styled from 'styled-components';
import { TodoItem, TodoForm } from 'todo-list';

const Container = styled.div`
  &.hover {
    cursor: crosshair;
  }
`;

interface ITodoListItemProps {
  todoItem: TodoItem;
  editing: boolean;
  onUpdate(todoItem: TodoItem): void;
  onCancel(todoItem: TodoItem): void;
}

export function TodoListItem(props: ITodoListItemProps) {
  const { todoItem, editing, onUpdate, onCancel } = props;

  function handleUpdate(todoItem: TodoItem) {
    onUpdate(todoItem);
  }

  return (
    <Container>
      {editing && (
        <TodoForm
          todoItem={todoItem}
          onSubmit={handleUpdate}
          onCancel={onCancel}
        />
      )}

      {!editing && (
        todoItem.title
      )}
    </Container>
  );
}
