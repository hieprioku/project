import { MdOutlineDeleteOutline } from "react-icons/md";



const TodoList = () => {
  return (
    <div className="todo-list">
        <p>Learn React Typescript</p>
    <div className="list-icon">
        <input type="checkbox" />
        <MdOutlineDeleteOutline />

    </div>
    </div>
  )
}

export default TodoList