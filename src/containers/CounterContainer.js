import React from "react";
import Counter from "../components/Counter";
import { useSelector, useDispatch } from "react-redux";
import {
  decrease,
  decreaseAsync,
  increase,
  increaseAsync,
} from "../modules/counter/counter";

function CounterContainer() {
  const number = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increaseAsync());
  };
  const onDecrease = () => {
    dispatch(decreaseAsync());
  };

  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
}

export default CounterContainer;
