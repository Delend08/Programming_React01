import TodoHeader from './components/TodoHeader.jsx';
import TodoAdder from './components/TodoAdder.jsx';
import TodoList from './components/TodoList.jsx';
import { useEffect, useState } from 'react';
import { Todo } from './type/Todo.jsx';
import './todolist.css'

const TODOS_STORAGE_KEY = 'todos';

function TodoListApp() {

    const initTodo = () => {
        const savedTodo = localStorage.getItem(TODOS_STORAGE_KEY);
        return JSON.parse(savedTodo) ?? [];
    }

    const [todos, setTodos] = useState(initTodo); // initTodos 함수는 react 처음 한번 호출
    

    useEffect(() => {
        localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos));
    }, [todos])
    const addTodo = (text) => setTodos((todos) => [
        ...todos,
        new Todo(text)
    ])

    const toggleTodo = (id) => {
        setTodos((todos) =>
            todos.map((todo) => todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo)
        )
    }
    const deleteTodo = (id) => {
        setTodos((todos) => 
            todos.filter((todo) => todo.id !== id)
        )
    }

    const editTodo = (id, newText) => {
        setTodos((todos) => 
            todos.map((todo) => todo.id=== id ? { ...todo, text:newText} : todo)
        )
    }
    return (
        <div className="todo">
            <TodoHeader />
            <TodoAdder addTodo={addTodo} />
            <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} editTodo={editTodo}/>
        </div>
    )
}

export default TodoListApp