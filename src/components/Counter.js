import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [intList, setIntList] = useState([]);

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleIntListButton = () => {
    setIntList([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    console.log(intList);
  };

  return (
    <div>
      <p>This is my Counter Component</p>
      <p>The count is : {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>

      <div className="intlist-section">
        <button onClick={handleIntListButton}>show the integer list:</button>
        <button onClick={() => setIntList([])}>Hide the integer list:</button>
        <div>
          {intList.map((intElement) => {
            return <h2 key={intElement}>the integer is : {intElement}</h2>;
          })}
        </div>
      </div>
    </div>
  );
};
<p>The count is : </p>;

export default Counter;
