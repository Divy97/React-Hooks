import React, { useEffect } from 'react'

const ChallengeSix = () => {

    const [windowSize, setWindowSize] = React.useState(window.screen.width);

    useEffect( () => {
       window.addEventListener('resize', windowResize);

       return () => {
        window.removeEventListener('resize', windowResize)
       }
    })

    const windowResize = () => {
        setWindowSize(window.innerWidth);
    }
  return (
    <>
        <h1>Window Size: {windowSize}</h1>
    </>
  )
}

export default ChallengeSix