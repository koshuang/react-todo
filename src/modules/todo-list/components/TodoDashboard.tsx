import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
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
    <Wrapper>
      <TodoList
        todoItems={todoItems}
        onUpdate={(updateTodoItem)}
        onDelete={(deleteTodoItem)}
      />
      <AddTodo onTodoAdded={addTodoItem} />
    </Wrapper>
  );

  function addTodoItem(todoItem: TodoItem) {
    todoFacade.add(todoItem);

    setTodoItems(todoFacade.getAllTodoItems());
  }

  function updateTodoItem(todoItem: TodoItem) {
    todoFacade.update(todoItem);

    setTodoItems(todoFacade.getAllTodoItems());
  }

  function deleteTodoItem(todoItem: TodoItem) {
    todoFacade.delete(todoItem);

    setTodoItems(todoFacade.getAllTodoItems());
  }
}
