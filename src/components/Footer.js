import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


const RemainingTodos = ({count}) => {
    const task = count === 1? '' : 's'
    return (
        <div>
            <h5>Remaining Todos:</h5>
            <strong>{count}</strong> todo {task} left
        </div>
    )
}
const CompletedTodos = ({count}) => {
    const task = count === 1? '' : 's'
    return (
        <div>
            <h5>Completed Todos:</h5>
            <strong>{count}</strong> todo {task} completed
        </div>
    )
}
const TotalTodos = ({count}) => {
    const task = count === 1? '': 's'
    return (
        <div>
            <h5>Total Todos:</h5>
            <strong>{count}</strong> todo {task} in total
        </div>
    )
}


const Footer = () => {

    const todosRemaining = useSelector((state) => {
        const inCompletedTodos = state.todos.filter((todo) => !todo.isComplete);
        return (inCompletedTodos.length);
    });
    const completedTodos = useSelector((state) => {
        const completedList = state.todos.filter((todo) => todo.isComplete);
        return (completedList.length);
    });
    const totalTodos = useSelector((state) => {
        const totalList = state.todos.map((todo) => todo.id);
        return totalList.length;
    })
    return (
        <footer className="footer">
            <RemainingTodos count={todosRemaining} />
            <TotalTodos count={totalTodos} />
            <CompletedTodos count={completedTodos} />
        </footer>
    )
}

export default Footer;