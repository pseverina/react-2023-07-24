import { ThemeContext } from "../../contexts/themeContext";
import { Menu } from "../Menu/component";
import { Reviews } from "../Reviews/component";

export const Restaurant = ({ restaurant }) => {
  return (
    <div>
      <h2>{restaurant.name}</h2>
      <ThemeContext.Provider value="green">
        <Menu dishes={restaurant.menu} />
      </ThemeContext.Provider>
      <Reviews reviews={restaurant.reviews} />
    </div>
  );
};
