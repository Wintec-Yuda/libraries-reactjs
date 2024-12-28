import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset } from "../lib/redux/features/counterSlice";
import { Button } from "@mui/material";

const CounterRedux = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="space-y-4">
      <h1>Counter: {count}</h1>
      <Button variant="contained" onClick={() => dispatch(increment())}>Increment</Button>
      <Button variant="contained" onClick={() => dispatch(decrement())}>Decrement</Button>
      <Button variant="contained" onClick={() => dispatch(reset())}>Reset</Button>
    </div>
  );
};

export default CounterRedux;
