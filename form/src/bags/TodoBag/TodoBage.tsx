import './TodoBage.css';
import TodoList from '../../components/todo-list/TodoList';
import TodoHome from '../../components/todo-home/TodoHome';




const TodoBage = () => {
  return (
    <div className="container">
        <header>
        <h1>Todo List</h1>
        <p>Get things done, one item at a time</p>
        </header>
        
        <TodoList />
        <TodoHome/>
    </div>
  )
}

export default TodoBage