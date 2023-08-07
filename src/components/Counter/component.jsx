import { useState } from "react";
import { Button } from '../Button/component'

export const Counter = ({ price }) => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <Button onClick={() => setCounter(() => counter - 1)}>
        -
      </Button>
      <span>{counter}</span>
      <Button onClick={() => setCounter(() => counter + 1)}>
        +
      </Button>
      <span>
        { counter * price} р
      </span>
    </div>
  )
}