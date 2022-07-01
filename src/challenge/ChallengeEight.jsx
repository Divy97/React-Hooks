import React, { useRef } from "react";

const ChallengeEight = () => {
  const name = useRef('');

  const [show, setShow] = React.useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const userName = name.current.value;
    userName === "" ? alert('Enter Name') : setShow(true);
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" ref={name} />
        <button className="bg-white text-primary">Submit</button>
      </form>
      <p>{show ?  `Name is: ${name.current.value}` : ""}</p>
    </>
  );
};

export default ChallengeEight;
