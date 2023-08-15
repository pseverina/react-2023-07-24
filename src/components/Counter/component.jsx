import { useEffect } from "react";
import { Button } from "../Button/component.jsx";
import { useCount } from "./hooks/use-count.js";

export const Counter = ({ defaultCount, onCountChange, min, max }) => {
  const { count, increment, decrement } = useCount({
    defaultCount,
    min,
    max,
    onCountChange,
  });

  useEffect(() => {
    increment();
  }, [increment]);

  return (
    <div>
      <Button disabled={count === min} onClick={decrement}>
        -
      </Button>
      <span> {count} </span>
      <Button disabled={count === max} onClick={increment}>
        +
      </Button>
    </div>
  );
};
