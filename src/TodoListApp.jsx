import './todolist.css'
import TodoItemEmpty from './components/TodoItemEmpty.jsx';
import Button from './components/Button.jsx';
import CheckBox from './components/CheckBox.jsx';

function TodoListApp() {

    return (
        <div className="todo">
            <h1 className="todo__title">No Think, Do it.</h1>
            <form className="todo__form">
                <input type="text" placeholder="할 일을 입력하세요." className="todo__input" />
                <Button type="submit" className="todo__Button todo__Button--add">Add</Button>
            </form>
            <ul className="todo__list">
                <TodoItemEmpty />
                <li className="todo__item todo__item--complete">
                    <input type="checkbox" id="check1" className="todo__check"/>
                    <label htmlFor="check1" className="todo__label">think</label>
                    <Button className="todo__Button todo__Button--edit">✏️</Button>
                    <Button className="todo__Button todo__Button--delete">❌</Button>
                </li>
                <li className="todo__item todo__item--complete">
                    <CheckBox id="2"/>
                    <Button className="todo__Button todo__Button--edit">✏️</Button>
                    <Button className="todo__Button todo__Button--delete">❌</Button>
                </li>
            </ul>
        </div>
    )
}

export default TodoListApp