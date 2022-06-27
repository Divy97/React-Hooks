import React,{useState} from 'react'

const UseStateHook = () => {

    const [count, setCount] = useState(0);

    const decrement = () => {
        setCount(prevCount => prevCount - 1);
    }

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    }
    
  return (
    <div>
        <button onClick={decrement}> - </button>
        <span>{count}</span>
        <button onClick={increment}> + </button>
    </div>
  )
}

export default UseStateHook;