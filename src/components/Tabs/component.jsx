import { RestaurantTabContainer } from "../RestaurantTab/container";

export const Tabs = ({ restaurantIds, onTabSelect }) => {
  return (
    <div>
      {restaurantIds.map((id) => (
        <RestaurantTabContainer
          key={id}
          restaurantId={id}
          onTabSelect={() => onTabSelect(id)}
        />
      ))}
    </div>
  );
};
