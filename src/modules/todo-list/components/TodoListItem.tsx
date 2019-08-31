import React, { MouseEvent, useState } from 'react';
import styled from 'styled-components';
import { X } from 'react-feather';
import { TodoItem, TodoForm } from 'todo-list';

const Container = styled.div`
  &.hover {
    cursor: crosshair;
  }

  .todo-item {
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;

interface ITodoListItemProps {
  todoItem: TodoItem;
  editing: boolean;
  onUpdate(todoItem: TodoItem): void;
  onDelete(todoItem: TodoItem): void;
  onCancel(todoItem: TodoItem): void;
}

export function TodoListItem(props: ITodoListItemProps) {
  const { todoItem, editing, onUpdate, onDelete, onCancel } = props;

  function handleUpdate(todoItem: TodoItem) {
    onUpdate(todoItem);
  }

  function handleDelete(event: MouseEvent) {
    event.preventDefault();

    onDelete(todoItem);
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
        <div className="todo-item">
          <span>{todoItem.title}</span>
          <span onClick={handleDelete}><X /></span>
        </div>
      )}
    </Container>
  );
}
