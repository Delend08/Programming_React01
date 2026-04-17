import { useState } from 'react'
import Button from './Button.jsx'

export default function TodoAdder({ addTodo }) {
    const [inputText, setInputText] = useState('');
    //submit이면 handlesubmit 실행하자
    const handlesubmit = (event) => {
        event.preventDefault();
        if (!inputText) return;
        addTodo(inputText.trim());
        setInputText('');
    }
    return (
        <form className="todo__form" onSubmit={handlesubmit}>
            <input
                type="text"
                placeholder="할 일을 입력하세요."
                className="todo__input"
                value={inputText}
                onChange={(event) => setInputText(event.target.value)}
            />
            <Button type="submit" className="todo__Button todo__Button--add">Add</Button>
        </form>
    )
}
