import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Page } from 'shared';
import { TodoDashboard } from 'todo-list';
import { Header, Menu } from 'app';

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Roboto');
    font-family: 'Roboto', sans-serif;
  }
`

const Container = styled.div`
  width: 500px;
  margin: 10px auto;
  font-size: 16px;
`;

export const App: React.FC = () => {
  return (
    <Container>
      <GlobalStyles />
      <Page
        header={<Header />}
        menu={<Menu />}
        main={<TodoDashboard />}
      />
    </Container>
  );
}
