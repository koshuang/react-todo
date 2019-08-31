import React from 'react';
import { TodoItem } from 'todo-list';

export function TodoList(props: any) {
  const { todoItems } = props;

  return (
    todoItems.map((todoItem: TodoItem, index: number) => (
      <div key={index}>
        {todoItem.title}
      </div>
    ))
  );
}
