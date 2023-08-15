import { Layout } from "../../components/Layout/component";
import { restaurants } from "../../constants/constants";
import { useState } from "react";
import { Restaurant } from "../../components/Restaurant/component";
import { Tabs } from "../../components/Tabs/component";
import { useEffect } from "react";
import { Button } from "../../components/Button/component";
import { ThemeContext } from "../../contexts/themeContext";
import { Provider } from "../../custome-redux/provider";
import { store } from "../../store";
import { Cart } from "../../components/Cart/component";

const LOCAL_STORAGE_KEY = "activeRestaurantIndex";

export const MainPage = () => {
  const [theme, setTheme] = useState("light");
  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(
    () => localStorage.getItem(LOCAL_STORAGE_KEY) || 0
  );

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, activeRestaurantIndex);
  }, [activeRestaurantIndex]);

  return (
    <Provider store={store}>
      <ThemeContext.Provider value={theme}>
        <Layout>
          <Button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            SwitchTheme
          </Button>
          <Tabs
            restaurants={restaurants}
            onTabSelect={setActiveRestaurantIndex}
          />
          <Restaurant restaurant={restaurants[activeRestaurantIndex]} />
          <Cart />
        </Layout>
      </ThemeContext.Provider>
    </Provider>
  );
};
