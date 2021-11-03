// As a user I can create a todo.
// As a user I can delete a todo.
// As a user I can edit a todo.
// As a user I can mark a todo as done.
// As a user I can add a color tag to a todo.
// As a user I can see a list of todos.
// As a user I can see the number of todos.
// As a user I can view only the completed todos.
// As a user I can see the number of completed todos.
// As a user I can view only the incomplete todos.
// As a user I can see the number of incomplete todos.
import {createStore} from "redux"

const initialState = {
    todos: [
      { id: 1, text: "Learn Redux", isDelete: false, isComplete: false},
      { id: 2, text: "Make my teacher proud", isDelete: false, isComplete: false },

    ],
  };

  const reducer = (state = initialState, action) => {
    // As a user I can create a todo.
    if (action.type === "addTodo") {
    
      return {
        todos: [...state.todos, { id: state.todos.length +1, text: action.payload, isComplete: false}],
      };
    }
    // As a user I can delete a todo.

    if (action.type === 'deleteTodo') {
        // const newArray = state.todos.filter((todo) => todo.id !== action.payload)
        const newArray = state.todos.map((todo) => {
          if (todo.id === action.payload) {
            todo.isDelete = true
            todo.isComplete = true;
            return todo
          }
          return todo
        })
        return {
          todos: newArray,
        }
      }
// As a user I can mark a todo as done.

      if(action.type === 'markTodo'){
        const newArray = state.todos.map((todo) => {
            if(todo.id === action.payload){
                todo.isComplete = !todo.isComplete;
                return todo;
            }
            return todo;
        })
        return {
            todos: newArray,
        }
    }

    // As a user I can add a color tag to a todo.
    if(action.type === 'colorTodo'){
        console.log('haa')
    }

    if(action.type === 'editTodo'){
        const newArray = state.todos.map((todo)=> todo.id === action.payload ? {
            ...todo, text: action.text}:todo)
       return{
           todos: newArray
       }
    }
    
      return state
    }



const store = createStore(reducer);

export default store;