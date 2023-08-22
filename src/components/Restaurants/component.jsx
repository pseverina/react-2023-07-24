import { useState } from "react";
import { CartContainer } from "../Cart/container";
import { RestaurantContainer } from "../Restaurant/container";
import { RestaurantTabsContainer } from "../Tabs/container";

export const Restaurants = () => {
  const [activeRestaurantId, setActiveRestaurantId] = useState();
  return (
    <>
      <RestaurantTabsContainer onTabSelect={setActiveRestaurantId} />
      <RestaurantContainer restaurantId={activeRestaurantId} />
      <CartContainer />
    </>
  );
};
