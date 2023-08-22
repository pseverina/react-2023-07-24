import { Button } from "../Button/component";

export const Dish = ({ dish, amount, increment, decrement }) => {
  const { price: dishPrice, name } = dish;

  return (
    <div>
      <div>{name}</div>
      <Button disabled={amount === 0} onClick={decrement}>
        -
      </Button>
      <span> {amount} </span>
      <Button disabled={amount === 5} onClick={increment}>
        +
      </Button>
      <div>Total: ${amount * dishPrice}</div>
    </div>
  );
};
