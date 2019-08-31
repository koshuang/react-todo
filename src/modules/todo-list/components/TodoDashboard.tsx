import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { DefaultPubSubContext, IThemeProps } from 'shared';
import { AddTodo, TodoItem, TodoList, todoFacade } from 'todo-list';

const Wrapper = styled.div<IThemeProps>`
  padding: 30px;

  .title {
    margin: 10px 0;
  }
`;

export function TodoDashboard() {
  const initTodoItems: TodoItem[] = [];
  const [currentFilter, setCurrentFilter] = useState('all');
  const [todoItems, setTodoItems] = useState(initTodoItems);
  const context = useContext(DefaultPubSubContext);

  useEffect(() => {
    setTodoItems(todoFacade.getAllTodoItems!());

    const unsubscribe = context.subscribe!('filter-todo', (data: any) => {
      setCurrentFilter(data.filter);
      filterTodoItems(data.filter);
    });

    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

    filterTodoItems(currentFilter);
  }

  function updateTodoItem(todoItem: TodoItem) {
    todoFacade.update(todoItem);

    filterTodoItems(currentFilter);
  }

  function deleteTodoItem(todoItem: TodoItem) {
    todoFacade.delete(todoItem);

    filterTodoItems(currentFilter);
  }
}
