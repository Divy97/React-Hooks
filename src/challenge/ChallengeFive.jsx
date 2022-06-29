import React, {useEffect} from 'react'

const ChallengeFive = () => {

    const [count, setCount] = React.useState(0);

    useEffect(() => {
        if(count >= 1) {
            document.title = `Count: (${count})`
        } else {
            document.title = 'Count'
        }
    }, [count])
    const increase = () => {
        setCount(prevCount => prevCount + 1);
    }
  return (
    <>
        <h1>{count}</h1>
        <button onClick={increase}>Click Me</button>
    </>
  )
}

export default ChallengeFive