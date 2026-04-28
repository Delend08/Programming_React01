import React, { use, useState } from 'react'
import CheckBox from './CheckBox.jsx'
import Button from './Button.jsx'

export default function TodoItem({ todo, toggleTodo, deleteTodo, editTodo }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);

    function handleEdit() {
        if (!isEditing) {
            setIsEditing(true)
            setEditText(todo.text);
        } else {
            const trimmedText = editText.trim();
            if (trimmedText !== todo.text && trimmedText !== "") {
                editTodo(todo.id ,trimmedText);
            }
            setIsEditing(false);
        }
    }
    function handleEnter(e) {
        e.key === 'Enter' && handleEdit()
    }
    return (
        <li className={`todo__item${todo.isCompleted ? " todo__item--complete" : ""}`}>

            {
                !isEditing &&
                <CheckBox
                    id={todo.id}
                    checked={todo.isCompleted}
                    onChange={() => toggleTodo(todo.id)}
                >
                    {todo.text}
                </CheckBox>
            }
            {
                isEditing &&
                <input
                    type='text'
                    className='todo__input--edit'
                    value={editText}
                    onChange={(event) => setEditText(event.target.value)}
                    autoFocus
                    onKeyUp={handleEnter}
                />
            }
            <Button className="todo__Button todo__Button--edit" onClick={handleEdit}>✏️</Button>
            <Button className="todo__Button todo__Button--delete" onClick={() => deleteTodo(todo.id)}>❌</Button>
        </li>
    )
}
