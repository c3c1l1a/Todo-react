/* eslint-disable */

import React, { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import TodoList from './TodoList';
import InputTodo from './InputTodo';

function TodoContainer(props) {
  const [state, setTodo] = useState({
    todos: [
     {
       id: uuidv4(),
       title: "Setup development environment",
       completed: true
     },
     {
       id: uuidv4(),
       title: "Develop website and add content",
       completed: false
     },
     {
       id: uuidv4(),
       title: "Deploy to live server",
       completed: false
     }
    ]
  });

  const handleChange = (id) => {
    setTodo({
      todos: state.todos.map((todo)=>{
        if (todo.id === id){
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  }

  const deleteTodoProps = (id) => {
    setTodo({
      todos: state.todos.filter((todo)=>{
        return todo.id !== id;
      })
    });
  }

  const addTodoProps = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    };
    setTodo({
      todos: [...state.todos, newTodo]
    });
  }

  return (
    <div>
      <InputTodo addTodoProps={addTodoProps}/>
      <TodoList handleChange={handleChange} 
                deleteTodoProps={deleteTodoProps}
                todos={state.todos}/>
    </div>
  );
}

export default TodoContainer;