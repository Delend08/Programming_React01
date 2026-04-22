import './todolist.css'
import TodoHeader from './components/TodoHeader.jsx';
import TodoAdder from './components/TodoAdder.jsx';
import TodoList from './components/TodoList.jsx';
import { useState } from 'react';
import { Todo } from './type/Todo.jsx';

function TodoListApp() {
    const [todos, setTodos] = useState([]);

    const addTodo = (text) => setTodos((todos) => [
        ...todos,
        new Todo(text)
    ])

    return (
        <div className="todo">
            <TodoHeader />
            <TodoAdder addTodo={addTodo}/>
            <TodoList todos={todos}/>
        </div>
    )
}

export default TodoListApp