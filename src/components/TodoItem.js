/* eslint-disable */
import styles from "./TodoItem.module.css";

const TodoItem = (props) => {
  const completedStyle = {
    fontStyle: 'italic',
    textDecoration: 'line-through',
    color: '#595959',
    opacity: '0.5',
  }
  return (
    <li className={styles.li}>
      <input type="checkbox" checked={props.todo.completed} 
                             onChange={() => props.handleChange(props.todo.id)}/> 
      <span className={styles.span} style={props.todo.completed? completedStyle: null}>
        {props.todo.title}
      </span>
      <button className={styles.button}onClick={() => props.deleteTodoProps(props.todo.id)}>
        🗑
      </button>
    </li>
  );
}

export default TodoItem;
