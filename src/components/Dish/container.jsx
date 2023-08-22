import { selectDishById } from "../../store/features/dish/selectors";
import { useDispatch, useSelector } from "react-redux";
import { Dish } from "./component";
import { selectDishAmountById } from "../../store/features/cart/selectors";
import { increment, decrement } from "../../store/features/cart/action";

export const DishContainer = ({ dishId }) => {
  const dish = useSelector((state) => selectDishById(state, dishId));
  const amount = useSelector((state) => selectDishAmountById(state, dishId));
  const dispatch = useDispatch();

  if (!dish) {
    return null;
  }

  return (
    <Dish
      dish={dish}
      amount={amount}
      increment={() => {
        dispatch(increment(dishId));
      }}
      decrement={() => {
        dispatch(decrement(dishId));
      }}
    />
  );
};
