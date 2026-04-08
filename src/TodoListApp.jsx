

function TodoListApp() {

    return (
        <div>
            <h1>No Think, Do it.</h1>
            <form>
                <input type="text" name="Todo" id="Todo" />
                <button type="submit">Add</button>
            </form>
            <ul id="TodoList">
                <li>
                    <input type="checkbox" id="check1" />
                    <label htmlFor="check1">think</label>
                    <button>✏️</button>
                    <button>❌</button>
                </li>
                <li>
                    <input type="checkbox" id="check2" />
                    <label htmlFor="check2">do</label>
                    <button>✏️</button>
                    <button>❌</button>
                </li>
            </ul>
        </div>
    )
}

export default TodoListApp