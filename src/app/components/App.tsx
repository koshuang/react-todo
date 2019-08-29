import React from 'react';
import styled from 'styled-components';
import { TodoDashboard } from 'todo-list';

const Container = styled.div`
  width: 250px;
  margin: 10px auto;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 13px;
`;

export const App: React.FC = () => {
  return (
    <Container>
      <TodoDashboard />
    </Container>
  );
}
