import Todo from './Todo'
import styles from './TodoList.module.css'

const TodoList = ({ todos, deleteTodo, toogleTodo, completedTodosExist}) => {
  return (
    <div className={styles.todoListContainer}>
      { !todos.length && <h2>Todo is empty</h2> }
      {todos.map((todo) => <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} toogleTodo={toogleTodo}/>)}
    </div>
  )
}

export default TodoList