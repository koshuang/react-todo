import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { DefaultPubSubContext, IThemeProps } from 'shared';
import { AddTodo, TodoItem, TodoList, TodoFacade } from 'todo-list';

const Wrapper = styled.div<IThemeProps>`
  padding: 30px;

  .title {
    margin: 10px 0;
  }
`;

export function TodoDashboard() {
  const initTodoItems: TodoItem[] = [];
  const [todoItems, setTodoItems] = useState(initTodoItems);
  const todoFacade = new TodoFacade();
  const context = useContext(DefaultPubSubContext);

  useEffect(() => {
    setTodoItems(todoFacade.getAllTodoItems());
    context.subscribe!('filter-todo', (data: any) => {
      filterTodoItems(data.filter);
    });
  }, []);

  return (
    <Wrapper>
      <h1 className="title">Todos</h1>
      <TodoList
        todoItems={todoItems}
        onUpdate={(updateTodoItem)}
        onDelete={(deleteTodoItem)}
      />
      <AddTodo onTodoAdded={addTodoItem} />
    </Wrapper>
  );

  function filterTodoItems(filter: string) {
    setTodoItems(todoFacade.getFilteredTodoItems(filter));
  }

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
