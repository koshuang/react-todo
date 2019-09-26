import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import { DefaultPubSubContext, IThemeProps } from '@modules/core';

const Container = styled.div<IThemeProps>`
  .list {
    padding: 0;
    margin: 0px;
    list-style-type: none;
  }
  .list-item {
    padding: 10px 20px 10px 40px;
    color: ${(props: IThemeProps) => props.theme.normalColor};
  }
  .list-item:hover {
    cursor: pointer;
    background-color: ${(props: IThemeProps) => darken(0.1, props.theme.backgroundColor)};
  }
  .list-item.active {
    background-color: ${(props: IThemeProps) => props.theme.backgroundColor};
  }
`;

export function TodoSidebarMenu() {
  const [currentFilter, setCurrentFilter] = useState('all');
  const context = useContext(DefaultPubSubContext);
  const menus = [
    { name: 'all', title: 'All' },
    { name: 'ongoing', title: 'Ongoing' },
    { name: 'completed', title: 'Completed' },
  ];

  function handleClick(filter: string) {
    setCurrentFilter(filter);
    context.publish!(
      'filter-todo',
      {
        filter,
      }
    );
  }

  function isActive(filter: string) {
    return filter === currentFilter
      ? 'active'
      : '';
  }

  return (
    <Container>
      <ul className="list">
        {menus.map((menu) => (
          <li
            key={menu.name}
            className={`list-item ${isActive(menu.name)}`}
            onClick={() => handleClick(menu.name)}
          >
            {menu.title}
          </li>
        ))}
      </ul>
    </Container>
  );
}
