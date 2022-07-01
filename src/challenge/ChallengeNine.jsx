import React, { useReducer } from "react";

const ChallengeNine = () => {
  const initialState = 10;

  const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1 className="text-center">{state}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}> Inc </button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}> Dec </button>
    </div>
  );
};

export default ChallengeNine;
