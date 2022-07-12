/* eslint-disable */

const TodoItem = (props) => {
  const completedStyle = {
    fontStyle: 'italic',
    textDecoration: 'line-through',
    color: '#595959',
    opacity: '0.5',
  }
  return (
    <li>
      <input type="checkbox" checked={props.todo.completed} 
                             onChange={() => props.handleChange(props.todo.id)}/> 
      <span style={props.todo.completed? completedStyle: null}>
        {props.todo.title}
      </span>
      <button onClick={() => props.deleteTodoProps(props.todo.id)}>
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
