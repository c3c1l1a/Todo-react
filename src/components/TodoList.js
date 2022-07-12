/* eslint-disable */
import TodoItem from './TodoItem';

function TodoList(props) {
  return (
    <ul>
      {props.todos.map((todo)=>{
        return <TodoItem key={todo.id} 
                         handleChange={props.handleChange} 
                         deleteTodoProps={props.deleteTodoProps}
                         updateTodo={props.updateTodo}
                         todo={todo}/>
      })}
    </ul>
  );
}

export default TodoList;