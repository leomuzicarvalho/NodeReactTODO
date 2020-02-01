import React from 'react';
import {TodoProvider} from './Contexts/TodoContext';
import TodoList from './Components/TodoList';

function App() {

  return (
    <TodoProvider>
      <div className="App">
        <TodoList/>
      </div>
    </TodoProvider>
  );
}

export default App;
