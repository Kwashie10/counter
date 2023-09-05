
import React,{ useState, useEffect } from "react";
import {ChevronUp, ChevronsUp, RotateCcw, Hash,ChevronsDown,ChevronDown,} from "react-feather";

const App = () => {
  const [count, setCount] = useState(0);

  const increment1 = () => {
    setCount(count + 1);
  };

  const increment2 = () => {
    setCount(count + 10);
  };

  const Reset = () => {
    setCount(0);
  };

  const setRandomCount = () => {
    const randomCount = Math.floor(Math.random() * 100) + 1;
    setCount(randomCount);
  };

  const decrement1 = () => {
    setCount(count - 10);
  };

  const decrement2 = () => {
    setCount(count - 1);
  };
  // Use useEffect to update the page title
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div className="container-main">
      <h1 className="current-value">Current Value:</h1>
      <p className="count-num">{count}</p>

      <div className="btn-hero">
        <button className="btn" onClick={increment1}>
          <ChevronUp />
        </button>
        <button className="btn" onClick={increment2}>
          <ChevronsUp />
        </button>
        <button className="btn" onClick={Reset}>
          <RotateCcw />
        </button>
        <button className="btn" onClick={setRandomCount}>
          <Hash />
        </button>
        <button className="btn" onClick={decrement1}>
          <ChevronsDown />
        </button>
        <button className="btn" onClick={decrement2}>
          <ChevronDown />
        </button>
      </div>
    </div>
  );
};

export default App;
