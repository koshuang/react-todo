import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import produce from 'immer';
import { AddTodo, TodoItem, TodoList, theme } from 'todo-list';

const Wrapper = styled.div`
`;

export function TodoDashboard() {
  const initTodoItems: TodoItem[] = [];
  const [todoItems, setTodoItems] = useState(initTodoItems);

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <TodoList todoItems={todoItems} />
        <AddTodo onTodoAdded={addTodoItem} />
      </Wrapper>
    </ThemeProvider>
  );

  function addTodoItem(todoItem: TodoItem) {
    const newItems: TodoItem[] = produce(todoItems, draftState => {
      draftState.push(todoItem);
    });

    setTodoItems(newItems);
  }
}
