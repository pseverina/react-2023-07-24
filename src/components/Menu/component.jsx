import { Dish } from "../Dish/component";
import { NewDish } from "../NewDish/component";

export const Menu = ({ dishes }) => {
  return (
    <div>
      <h3>Menu</h3>
      <div>
        {dishes.map((dish) => (
          <Dish key={dish} dish={dish} />
        ))}
      </div>
      <NewDish />
    </div>
  );
};
