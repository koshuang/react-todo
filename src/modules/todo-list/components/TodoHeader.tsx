import React from 'react';
import styled from 'styled-components';
import { Columns } from 'react-feather';
import { IThemeProps } from 'shared';

const Container = styled.div<IThemeProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 215px;
  padding: 0 16px;
  font-size: 18px;

  .site {
    margin-left: 5px;
  }
`;

export function TodoHeader() {
  return (
    <Container>
      <Columns />
      <span className="site">
        React Todo
      </span>
    </Container>
  );
}
