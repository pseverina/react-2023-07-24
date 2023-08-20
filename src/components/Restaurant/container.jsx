import { Users } from '../User/component'
import { Menu } from "../Menu/component";
import { Reviews } from "../Reviews/component";
import { ThemeContext } from "../../contexts/themeContext";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../store/features/restaurant/selectors";

export const RestaurantContainer = ({ restaurantId }) => {
    const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  return (
    <div>
      <h2>{restaurant.name}</h2>
      <ThemeContext.Provider value="green">
        <Menu dishes={restaurant.menu} />
      </ThemeContext.Provider>
      <Reviews reviewId={restaurant.reviews} />
      <Users/>
    </div>
  );
};