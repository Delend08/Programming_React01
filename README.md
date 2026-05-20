# Programming 수업 소스코드 😶‍🌫️
## 02_Counter
vanilla HTML, javaScript
## React 시작 🐦‍🔥
```shell
npm create vite@latest .
```
### CounterApp 🦄🙃
- `useState()`
- `onClick={() => set함수()}`
- `onClick={() => set함수(이전state => 이전state + 1)}`
### TodoListApp 🌸
- React Component 분리
- for -> htmlFor, class -> className
- props
- `<input id={id} value={} />`, `<label htmlFor={id} />`
- onChange, onClick, onKeyUp
- 구조 분해 할당, `...스프레드 연산자`
- `map()` : RU, `filter()` : D
- `<TodoItem key={} />`
- `const handleEvent = (event) => {}`
- `{조건식 ? 참 : 거짓}`
- `{조건식 && 참}`
- `{!조건식 && 거짓}`
- localStorage, `useEffect()`
- `style{{}}`
- HomeApp: state 값을 변경하여 그에 맞는 컴포넌트를 표시하자
- `npm isntall react-router-dom`
- ```javascript
    <BrowserRouter>
        <Routes>
            <Route path="/" element={} />
        </Routes>
    </BrowserRouter>
    ```
- ```javascript
    <Link to="/"></Link>
    ```
- `useNavigate()`