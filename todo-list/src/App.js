import './App.css';
import Header from './Components/Header';
import {Footer} from './Components/Footer';
import {Todos} from './Components/Todos';
import React, { useState, useEffect } from 'react';
import {AddTodo} from './Components/AddTodo';
import {About} from './Components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  let initTask;
  if (localStorage.getItem('tasks') === null) {
    initTask = [];
  } else {
    initTask = JSON.parse(localStorage.getItem('tasks'));
  }

  const onDelete = (todo) => {
    console.log('I am onDelete of todo', todo);
    setTodoList(todoList.filter((e) => e !== todo));
    localStorage.setItem('tasks', JSON.stringify(todoList));
  };

  const addTodo = (task, desc) => {
    console.log('Adding task', task, desc);
    let sno = 1;
    if (todoList.length > 0) {
      sno = todoList[todoList.length - 1].sno + 1;
    }
    const myTask = {
      sno: sno,
      title: task,
      desc: desc,
    };
    setTodoList([...todoList, myTask]);
    console.log(myTask);
  };

  const [todoList, setTodoList] = useState(initTask);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(todoList));
  }, [todoList]);

  return (
    <Router>
      <Header searchBar={false} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todoList={todoList} onDelete={onDelete} />
            </>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
