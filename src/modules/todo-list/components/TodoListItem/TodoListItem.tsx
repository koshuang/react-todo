import React, { MouseEvent } from 'react';
import styled from 'styled-components';
import { X } from 'react-feather';
import { Checkbox } from '@modules/shared';
import { TodoItem, TodoForm } from '@modules/todo-list';

const Container = styled.div`
  &.hover {
    cursor: crosshair;
  }

  .todo-item {
    padding-top: 10px;
    padding-bottom: 10px;
    line-height: 28px;

    display: flex;
    flex-direction: row wrap;
    justify-content: space-between;

    border-bottom: 1px solid #f0f0f0;
  }

  .todo-item-delete {
    height: 24px;
    margin-top: 2px;

    cursor: pointer;

    &:hover {
      color: ${props => props.theme.infoColor};
    }
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

  function handleToggleComplete(event: MouseEvent) {
    todoItem.completed = !todoItem.completed;

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
        <span className="todo-item">
          <span>
            <Checkbox
              checked={todoItem.completed}
              onChange={handleToggleComplete}
            />
            <span>{todoItem.title}</span>
          </span>
          <span className="todo-item-delete" onClick={handleDelete}>
            <X />
          </span>
        </span>
      )}
    </Container>
  );
}
