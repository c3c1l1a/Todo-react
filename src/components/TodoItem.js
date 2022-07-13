/* eslint-disable */
import React, { useState } from 'react';
import styles from "./TodoItem.module.css";

const TodoItem = (props) => {
  const [state, setState] = useState({
    editing: false,
    title: '',
  });

  const editMode = {};
  if (state.editing){
    editMode.boxShadow = '0 0 10px -5px gray';
  } else {
    editMode.boxShadow = 'none';
  }

  const completedStyle = {
    fontStyle: 'italic',
    textDecoration: 'line-through',
    color: '#595959',
    opacity: '0.5',
  }

  const handleEditing = () => {
    props.todo.title = '';
    setState({
      editing: true,
    });  
  }

  const handleInput = (e) => {
    props.updateTodo(e.target.value, props.todo.id);
  }

  const handleUpdateDone = (e) => {
    if (e.key === 'Enter' || e.type === 'blur'){
      if (props.todo.title.trim()){
        setState({
          editing: false
        });
        e.target.blur();
      } 
    } 
  }

  return (
    <li className={styles.li}>
        <input type="checkbox" checked={props.todo.completed} 
                               onChange={() => props.handleChange(props.todo.id)}/> 
        <input type="text"  style={props.todo.completed? completedStyle: null, editMode} 
                            className={styles.textInput} 
                            onClick={handleEditing}
                            value={props.todo.title}
                            onChange={handleInput}
                            onKeyDown={handleUpdateDone}
                            onBlur={handleUpdateDone}
                            />
        <button className={styles.button}onClick={() => props.deleteTodoProps(props.todo.id)}>
          🗑
        </button>
    </li>
  );
}

export default TodoItem;
