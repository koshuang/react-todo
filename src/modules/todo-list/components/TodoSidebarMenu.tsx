import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';
import { IThemeProps } from 'shared';

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
    background-color: ${(props: IThemeProps) => props.theme.backgroundColor};
  }
`;

export function TodoSidebarMenu() {
  return (
    <Container>
      <ul className="list">
        <li className="list-item">All</li>
        <li className="list-item">Ongoing</li>
        <li className="list-item">Completed</li>
      </ul>
    </Container>
  );
}
