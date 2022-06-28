import React,{useRef, useState} from 'react'

const UseRefHook = () => {
    const [name, setName] = useState('');
    const inputRef = useRef();

    function focus(){
        inputRef.current.focus();
    }
  return (
    <div>
        <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
        <div>My Name is: {name}</div>
        <button onClick={focus}>Focus</button>
    </div>
  )
}

export default UseRefHook