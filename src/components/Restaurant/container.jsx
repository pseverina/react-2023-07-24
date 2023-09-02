import { Restaurant } from "./component";
import { useGetRestaurantsQuery } from "../../store/services/api";

export const RestaurantContainer = ({ restaurantId }) => {
  const { data: restaurant, isLoading } = useGetRestaurantsQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result.data?.find(({ id }) => id === restaurantId),
    }),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!restaurant) {
    return null;
  }

  return <Restaurant restaurant={restaurant} />;
};
