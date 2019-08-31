import React, { useState } from 'react';
import styled from 'styled-components';
import { TodoListItem, TodoItem } from 'todo-list';

const Container = styled.div`
  &.hover {
    cursor: crosshair;
  }
`;

interface ITodoListProps {
  todoItems: TodoItem[];
  onUpdate(todoItem: TodoItem): void;
  onDelete(todoItem: TodoItem): void;
}

export function TodoList(props: ITodoListProps) {
  const { todoItems, onUpdate, onDelete } = props;
  const [currentEditingTodoItem, setCurrentEditingTodoItem] = useState<null|TodoItem>(null);

  function isEditing(todoItem: TodoItem): boolean {
    return currentEditingTodoItem === todoItem;
  }

  function handleClick(todoItem: TodoItem) {
    if (isEditing(todoItem)) {
      return;
    }

    setCurrentEditingTodoItem(todoItem);
  }

  function handleUpdate(todoItem: TodoItem) {
    onUpdate(todoItem);
    setCurrentEditingTodoItem(null);
  }

  function handleDelete(todoItem: TodoItem) {
    onDelete(todoItem);
    setCurrentEditingTodoItem(null);
  }

  function handleCancel() {
    setCurrentEditingTodoItem(null);
  }

  return (
    <>
      {todoItems.map((todoItem: any) => (
        <div
          key={todoItem.id}
          onClick={() => handleClick(todoItem)}
        >
          <TodoListItem
            todoItem={todoItem}
            editing={isEditing(todoItem)}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
            onCancel={handleCancel}
          />
        </div>
      ))}
    </>
  );
}
