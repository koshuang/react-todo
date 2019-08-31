import React, { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { AddTodo, TodoItem, TodoList, TodoFacade, theme } from 'todo-list';

const Wrapper = styled.div`
`;

export function TodoDashboard() {
  const initTodoItems: TodoItem[] = [];
  const [todoItems, setTodoItems] = useState(initTodoItems);
  const todoFacade = new TodoFacade();

  useEffect(() => {
    setTodoItems(todoFacade.getAllTodoItems());
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <TodoList todoItems={todoItems} onUpdate={(updateTodoItem)} />
        <AddTodo onTodoAdded={addTodoItem} />
      </Wrapper>
    </ThemeProvider>
  );

  function addTodoItem(todoItem: TodoItem) {
    todoFacade.add(todoItem);

    setTodoItems(todoFacade.getAllTodoItems());
  }

  function updateTodoItem(todoItem: TodoItem) {
    todoFacade.update(todoItem);

    setTodoItems(todoFacade.getAllTodoItems());
  }
}
