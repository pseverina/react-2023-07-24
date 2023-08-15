import { Button } from "../Button/component";
import { useDispatch, useSelector } from "../../custome-redux";

export const Dish = ({ dish }) => {
  const count = useSelector((state) => state[dish.name] || 0);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: "increment", payload: dish.name });
  };
  const decrement = () => {};

  const { price: dishPrice, name } = dish || {};

  return (
    <div>
      <div>{name}</div>
      <Button disabled={count === 0} onClick={decrement}>
        -
      </Button>
      <span> {count} </span>
      <Button disabled={count === 5} onClick={increment}>
        +
      </Button>
      <div>Total: ${count * dishPrice}</div>
    </div>
  );
};
