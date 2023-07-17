import React, { useState, useEffect } from 'react';
import Header from './components/Header.js';
import './App.css';
import Form from './components/form.js';
import TodoList from './components/TodoList.js';
const App = () => {

  const initialState = JSON.parse(localStorage.getItem("Todo")) || []
  const [input, setInput] = useState("");
  const [Todo, setTodo] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem("Todo", JSON.stringify(Todo));
  }, [Todo]);

  return (
    <div className='container'>

      <div className='app-wrapper'>

        <div>
          <Header />
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            Todo={Todo}
            setTodo={setTodo}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <TodoList
            Todo={Todo}
            setTodo={setTodo}
            setEditTodo={setEditTodo} />
        </div>
      </div>
    </div>


  )
};

export default App;
