import React from 'react'
import CheckBox from './CheckBox.jsx'
import Button from './Button.jsx'

export default function TodoItem({ todo, toggleTodo, deleteTodo }) {

    return (
        <li className={`todo__item${todo.isCompleted ? " todo__item--complete" : ""}`}>
            <CheckBox 
                id={todo.id}
                checked={todo.isCompleted}
                onChange={() => toggleTodo(todo.id)}    
            >
                {todo.text}
            </CheckBox>
            <Button className="todo__Button todo__Button--edit">✏️</Button>
            <Button className="todo__Button todo__Button--delete" onClick={() => deleteTodo(todo.id)}>❌</Button>
        </li>
    )
}
