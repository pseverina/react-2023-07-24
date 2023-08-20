import { RestaurantContainer} from './container';

export const Restaurant = ({ restaurant }) => {
  return (
    <div>
     {restaurant.map(id => (
      <RestaurantContainer
        key={id}
        id={id} 
        />
     ))}
    </div>
  );
};
