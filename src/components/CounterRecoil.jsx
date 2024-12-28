import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { counterState, doubleCounterState } from "../lib/recoil/store";

const CounterRecoil = () => {
  const [count, setCount] = useRecoilState(counterState);
  const doubleCount = useRecoilValue(doubleCounterState);

  return (
    <div className="p-4 font-sans">
      <h1 className="text-xl font-bold">Recoil Counter</h1>
      <p className="mt-2">Current Count: {count}</p>
      <p>Double Count: {doubleCount}</p>
      <div className="mt-4">
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 mr-4 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Increment
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default CounterRecoil;
