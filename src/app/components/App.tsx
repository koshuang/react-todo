import React from 'react';
import { Page } from '@modules/core';
import { usePubSub, DefaultPubSubContext } from '@modules/pubsub';
import { TodoDashboard, TodoHeader, TodoSidebarMenu, theme } from '@modules/todo-list';

export const App: React.FC = () => {
  const { PubSubContext, publish, subscribe, unsubscribe } = usePubSub(DefaultPubSubContext);

  return (
    <PubSubContext.Provider value={{ publish, subscribe, unsubscribe }}>
      <Page
        theme={theme}
        header={<TodoHeader />}
        sidebar={<TodoSidebarMenu />}
        main={<TodoDashboard />}
        footer={<div>Made by Kos Huang</div>}
      />
    </PubSubContext.Provider>
  );
}
