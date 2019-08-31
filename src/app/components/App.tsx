import React from 'react';
import { Page, usePubSub, DefaultPubSubContext } from 'shared';
import { TodoDashboard } from 'todo-list';
import { Header, Sidebar } from 'app';

export const App: React.FC = () => {
  const { PubSubContext, publish, subscribe, unsubscribe } = usePubSub(DefaultPubSubContext);

  return (
    <PubSubContext.Provider value={{ publish, subscribe, unsubscribe }}>
      <Page
        header={<Header />}
        sidebar={<Sidebar />}
        main={<TodoDashboard />}
        footer={<div>Made by Kos Huang</div>}
      />
    </PubSubContext.Provider>
  );
}
