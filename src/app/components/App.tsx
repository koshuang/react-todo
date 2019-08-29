import React from 'react';
import { Todos } from 'todo-list';

export const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Todos />
      </header>
    </div>
  );
}
