import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { DefaultPubSubContext } from 'shared';
import { AddTodo, TodoItem, TodoList, TodoFacade } from 'todo-list';

const Wrapper = styled.div`
`;

export function TodoDashboard() {
  const initTodoItems: TodoItem[] = [];
  const [todoItems, setTodoItems] = useState(initTodoItems);
  const todoFacade = new TodoFacade();
  const context = useContext(DefaultPubSubContext);

  useEffect(() => {
    setTodoItems(todoFacade.getAllTodoItems());
    context.subscribe!('filter-todo', (data: any) => {
      console.log(data);
      filterTodoItems(data.filter);
    });
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
