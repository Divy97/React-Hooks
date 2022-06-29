import React from 'react'

const ChallengeTwo = () => {

    const bioData = [
        {
            id: 0, myName: 'Divy', age: 19
        },
        {
            id: 1, myName: 'Veven', age: 50
        }
    ]

    const [myData, setMyData] = React.useState(bioData);
    const handleClear = () => {
        { 
            myData.length === 0 ? setMyData(bioData) : setMyData([])
        }
    }
  return (
    <>
            {
                myData.map((data) => {
                    return <h1 key={data.id}>Name: {data.myName} & Age: {data.age}</h1>
                })
            }
        <button onClick={handleClear} style={{marginLeft:'2 00px'}}>{ myData.length === 0 ? 'GetData' : 'Clear' }</button>
    </>
  )
}

export default ChallengeTwo;