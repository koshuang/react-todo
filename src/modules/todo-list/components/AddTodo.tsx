import React, { useState } from 'react';
import { Button } from 'shared';
import { TodoForm, TodoItem } from 'todo-list';

interface IAddTodoProps {
  onTodoAdded(todoItem: TodoItem): void;
}

export function AddTodo(props: IAddTodoProps) {
  const { onTodoAdded } = props;
  const [editing, setEditing] = useState(false);

  return (
    <>
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
    </>
  );

  function handleSubmit(todoItem: TodoItem) {
    onTodoAdded(todoItem);
    setEditing(false);
  }
}
