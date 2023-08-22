import { DishContainer } from "../Dish/container";

export const Cart = ({ dishIds }) => {
  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {dishIds.map((dishId) => (
          <DishContainer key={dishId} dishId={dishId} />
        ))}
      </ul>
    </div>
  );
};
