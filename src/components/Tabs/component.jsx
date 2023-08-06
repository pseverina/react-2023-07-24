import { Button } from "../Button/component";

export const Tabs = ({ restaurants, onTabSelect }) => {
  return (
    <div>
      {restaurants.map((restaurant, index) => (
        <Button key={restaurant.id} onClick={() => onTabSelect(index)}>
          {restaurant.name}
        </Button>
      ))}
    </div>
  );
};
