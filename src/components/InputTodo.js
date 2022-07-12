/* eslint-disable */
import styles from "./InputTodo.module.css";
import React, { useState } from 'react';

function InputTodo(props) {
  const [state, setTitle] = useState({
    title: '',
  });

  const onChange = (e) => {
    setTitle({
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.title.trim()) {
       props.addTodoProps(state.title);
       setTitle({
         title: "",
       });
     } else {
       alert("Please write item");
     }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input className={styles.input} type="text" placeholder="Add Todo..." value={state.title} onChange={onChange} name="title"/>
      <button className={styles.button}>+</button>
    </form>
  );
}

export default InputTodo;
