import React from 'react'
import { BrowserRouter, Route, Routes, Link, useNavigate } from 'react-router-dom'
import CounterApp from './CounterApp'
import TodoListApp from './TodoListApp'

function LinkButtonPageApp() {
    const navigate = useNavigate();

    return (
        <>
            <h1>App 목록</h1>
            <ul>
                <li>
                    <Link to="/counterapp">
                        CounterApp
                    </Link>
                </li>
                <li>
                    <Link to="/todolistapp">
                        TodoListApp
                    </Link>
                </li>
                <li>
                    <button
                        onClick={() => navigate("/counterApp")}
                    > CounterApp</button>
                </li>
                <li>
                    <button
                        onClick={() => navigate("/todolistapp")}
                    >TodoListApp</button>
                </li>
            </ul>
        </>
    )
}

export default function RouterApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LinkButtonPageApp />} />
                <Route path='/counterapp' element={<CounterApp />} />
                <Route path='/todolistapp' element={<TodoListApp />} />
            </Routes>
        </BrowserRouter>
    )
}
