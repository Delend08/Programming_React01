import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// import './App.css'

function CounterApp() {
  const baseNumber = 0
  //count: 현재 또는 이전 상태 값; serCount(): 상태값 변경 함수
  const [count, setCount] = useState(baseNumber)
  const numberConversion = (n) => setCount(count => count + n);
  const reset = () => setCount(baseNumber)
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => numberConversion(1)}>+</button>
      <button onClick={() => numberConversion(2)}>+2</button>
      <button onClick={() => numberConversion(-1)}>-</button>
      <button onClick={() => reset()}>reset</button>

      <button onClick={() => {
        if (count < 10) numberConversion(1)
      }}>+(최대10까지)</button>
      <button onClick={() => count < 10 && numberConversion(1)}>+(최대10까지)</button>
      {/* <button
        className="counter"
        onClick={() => setCount((count) => count + 1)}
      >
        Count is {count}
      </button> */}
    </>
  )
}

export default CounterApp
