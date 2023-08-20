import { selectRestaurantById } from "../../store/features/restaurant/selectors";
import { Tab } from "../Tab/component";
import { useSelector } from "react-redux";

export const RestaurantTabContainer = ({ restaurantId, ...props }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  return <Tab title={restaurant.name} {...props} />;
};
