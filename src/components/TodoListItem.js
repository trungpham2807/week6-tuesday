import {useDispatch} from "react-redux"
import React, {useState} from "react";

// import {FilterTodo} from "./Filter" 
const TodoListItem = ({ id, text, isComplete }) => {
    const dispatch = useDispatch()
    const [edit, setEdit] = useState('none')

const handleDelete =() => {
    dispatch({type: "deleteTodo", payload: id})
}

const handleComplete = () => {
    dispatch({type: "markTodo", payload: id})
}

const handleColor = () => {
    dispatch({type: "colorTodo", payload:id})
}

const filterTodo = () => {
    dispatch({type: "filterTodo", payload:id})

}

const handleEdit = () => {
  // e.preventDefault()
  dispatch({type: "editTodo", payload:id})
  setEdit("")


  }



  return <div className = "TodoListItem">
      {text}
  <button  className="todolist-button bt1" onClick = {handleDelete}> X </button>

  {/* complete */}
  <span/>
  <div className="todolist-input">
  <input 
    type = "checkbox"
    value = {isComplete}
    onChange = {handleComplete}
    />
  </div>
    

  <button className="todolist-button bt2" onClick = {handleEdit}>Edit </button>
{/* color checked */}
<span />
<div className="todolist-checkbox">
<select onChange = {handleColor} id="color">
  <option value="complete">Complete</option>
  <option value="in-complete">Not done</option>
  <option value="in-progress">In Progress</option>
  <option value="to-do" selected>Todo</option>
</select>
</div>




  </div>

};

export default TodoListItem;