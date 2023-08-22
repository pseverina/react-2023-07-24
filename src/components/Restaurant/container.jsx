import { useSelector } from "react-redux";
import { Restaurant } from "./component";
import { selectRestaurantById } from "../../store/features/restaurant/selectors";

export const RestaurantContainer = ({ restaurantId }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  if (!restaurant) {
    return null;
  }

  return <Restaurant restaurant={restaurant} />;
};
