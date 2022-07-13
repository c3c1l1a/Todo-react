/* eslint-disable */
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import TodoList from './TodoList';
import InputTodo from './InputTodo';
import Navbar from './Navbar';
import About from './pages/About';
import styles from './TodoContainer.module.css';

function TodoContainer() {
  const [state, setTodo] = useState({
    todos: [
      {
        id: uuidv4(),
        title: 'Setup development environment',
        completed: true,
      },
      {
        id: uuidv4(),
        title: 'Develop website and add content',
        completed: false,
      },
      {
        id: uuidv4(),
        title: 'Deploy to live server',
        completed: false,
      },
    ],
  });

  const handleChange = (id) => {
    setTodo({
      todos: state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  const deleteTodoProps = (id) => {
    setTodo({
      todos: state.todos.filter((todo) => todo.id !== id),
    });
  };

  const addTodoProps = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setTodo({
      todos: [...state.todos, newTodo],
    });
  };

  const updateTodo = (title, id) => {
    setTodo({
      todos: state.todos.map((todo) => {
        if (todo.id === id) {
          todo.title = title;
          return todo;
        }
        return todo;
      }),
    });
  };

  return (
    <div className={styles.div}>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={(
            <div>
              <Header />
              <InputTodo addTodoProps={addTodoProps} />
              <TodoList
                handleChange={handleChange}
                deleteTodoProps={deleteTodoProps}
                updateTodo={updateTodo}
                todos={state.todos}
              />
            </div>
        )}
        />
        <Route path="about/*" element={<About />} />
      </Routes>
    </div>
  );
}

export default TodoContainer;
