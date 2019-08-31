import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Page } from 'shared';
import { TodoDashboard } from 'todo-list';
import { Header, Sidebar } from 'app';

export const App: React.FC = () => {
  return (
    <Page
      header={<Header />}
      sidebar={<Sidebar />}
      main={<TodoDashboard />}
      footer={<div>footer</div>}
    />
  );
}
