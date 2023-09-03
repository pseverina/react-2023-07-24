import { useDispatch, useSelector } from "react-redux";
import { Dish } from "./component";
import { selectDishAmountById } from "../../store/features/cart/selectors";
import { cartSlice } from "../../store/features/cart";
import { useGetDishesQuery } from '../../store/services/api'

export const DishContainer = ({ dishId }) => {
  const { data: dish, isFetching } = useGetDishesQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result.data?.find(({ id }) => id === dishId),
    }),
  });
  const amount = useSelector((state) => selectDishAmountById(state, dishId));
  const dispatch = useDispatch();

  if (isFetching) {
    return <div>...Loading</div>
  }

  if (!dish) {
    return null;
  }

  return (
    <Dish
      dish={dish}
      amount={amount}
      increment={() => {
        dispatch(cartSlice.actions.incrementDish(dishId));
      }}
      decrement={() => {
        dispatch(cartSlice.actions.decrementDish(dishId));
      }}
    />
  );
};
