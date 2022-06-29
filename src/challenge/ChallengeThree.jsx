import React from 'react'

const ChallengeThree = () => {

    const [myData, setMyData] = React.useState( {
        id: 0, myName: 'Divy', age: 19
    });

    const handleUpdate = () => {
       setMyData({...myData,myName:'hemlo'});
    }
  return (
    <>
        <h1>Name: {myData.myName} & Age: {myData.age}</h1>
        <button onClick={handleUpdate} style={{marginLeft:'2 00px'}}>Update</button>
    </>
  )
}

export default ChallengeThree