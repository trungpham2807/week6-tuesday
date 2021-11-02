import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoListItem from "./TodoListItem";
import Footer from "./Footer";
import "./TodoListItem.css"
// const selectTodos = (state) => state.todos;

const TodoList = ({id, text, isComplete}) => {
    const dispatch = useDispatch()

    //   const todos = useSelector(selectTodos);
    const todos = useSelector ((state) => state.todos)
    console.log(todos)



  return (
      <div>
    <ul className="todo-list">
      {todos.map((todo) => todo.isDelete ? null :(
      <TodoListItem key={todo.id} id={todo.id} text={todo.text} isComplete = {todo.isComplete} />)
        // <TodoListItem key={todo.id} {...todo} />
      )}
    </ul>
    <Footer />

    </div>
  );
};

export default TodoList;