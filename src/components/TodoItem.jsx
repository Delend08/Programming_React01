import React from 'react'
import CheckBox from './CheckBox.jsx'
import Button from './Button.jsx'

export default function TodoItem() {
    return (
        <li className="todo__item todo__item--complete">
            <CheckBox id="2"/>
            <Button className="todo__Button todo__Button--edit">✏️</Button>
            <Button className="todo__Button todo__Button--delete">❌</Button>
        </li>
    )
}
