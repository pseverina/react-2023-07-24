import { Button } from "../Button/component";
import { useDispatch, useSelector } from "react-redux";

export const Dish = ({ dish }) => {
  const count = useSelector((state) =>  state.cart[dish] ?? 0);
  const name = useSelector((state) => state.dish.entities[dish].name);
  const price = useSelector((state) => state.dish.entities[dish].price);
  
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: "increment", payload: dish });
  };
  const decrement = () => {
    dispatch({ type: "decrement", payload: dish });
  };

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
      <div>Total: ${count * price}</div>
    </div>
  );
};
