import React from 'react';
import styled from 'styled-components';
import { IThemeProps } from 'shared';

const Container = styled.div<IThemeProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 300px;
  padding: 0 16px;
  background-color: #648ca6;
`;

export function TodoHeader() {
  return (
    <Container>
      <div className="search">Search...</div>
    </Container>
  );
}
