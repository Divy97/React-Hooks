import React, { useState } from 'react'

const ChallengeOne = () => {

    const [text, setText] = useState('Hello, Divy');

    const changeText = () => {

        { 
            text === 'Hello, Divy' ? setText('Bye, Divy') : setText('Hello, Divy')
        }
    }

  return (
    <div>
        <div>{text}</div>
        <button onClick={changeText}>Click Me</button>
    </div>
  )
}

export default ChallengeOne