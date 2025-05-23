import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import TodoList from './components/TodoList.jsx';

function App() {
  const [listTodo, setListTodo] = useState(() => {
    const saved = localStorage.getItem('todoList');
    return saved ? JSON.parse(saved) : [];
  });

  // Save tasks to localStorage on change
  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(listTodo));
  }, [listTodo]);

  const addList = (inputText) => {
    if (inputText.trim() !== '') {
      setListTodo(prev => [...prev, inputText]);
    }
  };

  const deleteItem = (index) => {
    const updatedList = listTodo.filter((_, i) => i !== index);
    setListTodo(updatedList);
  };

  return (
    <div className="Main-container">
      <div className="center-container">
        <Header addlist={addList} />
        <TodoList listTodo={listTodo} deleteItem={deleteItem} />
      </div>
    </div>
  );
}

export default App;
