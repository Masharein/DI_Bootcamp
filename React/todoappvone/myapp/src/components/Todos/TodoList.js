import Todo from './Todo'
import styles from './TodoList.module.css'

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <div className={styles.todoListContainer}>
      { !todos.length && <h2>Todo is empty</h2> }
       {todos.map((todo, index) => <Todo key={index} todo={todo} index={index} deleteTodo={deleteTodo}/>)}
    </div>
  )
}

export default TodoList