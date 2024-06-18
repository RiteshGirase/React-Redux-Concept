import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, decrementByAmount, increment, incrementByAmount, multiply } from './redux/Counter/CounterSlice'
import Navbar from './components/Navbar'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <Navbar count={count} />
      <div>
        <button onClick={()=>{dispatch(decrementByAmount(6))}}>-</button>
        {count}
        <button onClick={()=>{dispatch(incrementByAmount(6))}}>+</button>
      </div>
    </>
  )
}

export default App
