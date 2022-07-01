import React, { useState, useRef } from "react";

const UseRef = () => {
  const [myNum, setMyNum] = useState(0);

  const inputOne = useRef();
  const inputTwo = useRef();

  const getNumBox = () => {
    console.log("Hello");
    console.log(inputOne.current);
    inputOne.current.style.width = "500px";
    inputTwo.current.style.width = "100px";
  };

  const getTextBox = () => {
    console.log("Bye");
    console.log(inputTwo.current);
    inputOne.current.style.width = "100px";
    inputTwo.current.style.width = "500px";
  };

  return (
    <>
      <h2>HELLO</h2>
      <input
        ref={inputOne}
        type="number"
        value={myNum}
        onChange={(e) => setMyNum(e.target.value)}
        style={{width: "100px"}}
      />

      <input
        ref={inputTwo}
        type="text"
        value={myNum}
        onChange={(e) => setMyNum(e.target.value)}
      />

      <h3>Value is : {myNum}</h3>

      <button onClick={() => getNumBox()}>Rupees</button>
      <button onClick={() => getTextBox()}>Dollars</button>
    </>
  );
};

export default UseRef;
