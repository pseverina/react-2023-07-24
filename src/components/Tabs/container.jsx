import { useGetRestaurantsQuery } from "../../store/services/api";
import { Button } from "../Button/component";
import { Tabs } from "./component";

export const RestaurantTabsContainer = (props) => {
  const {
    data: restaurants,
    isLoading,
    isError,
    refetch,
  } = useGetRestaurantsQuery(undefined, { pollingInterval: 5000 });

  if (isError) {
    return <Button onClick={refetch}>Refetch</Button>;
  }

  if (isLoading) {
    return <div>Loading</div>;
  }

  return <Tabs restaurants={restaurants} {...props} />;
};
