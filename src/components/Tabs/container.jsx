import { selectRestaurantIds } from "../../store/features/restaurant/selectors";
import { Tabs } from "./component";
import { useSelector } from "react-redux";

export const RestaurantTabsContainer = (props) => {
  const restaurantIds = useSelector(selectRestaurantIds);

  return <Tabs restaurantIds={restaurantIds} {...props} />;
};
