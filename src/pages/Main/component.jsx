import { Layout } from "../../components/Layout/component";
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "../../components/Button/component";
import { ThemeContext } from "../../contexts/themeContext";
import { Provider } from "react-redux";
import { store } from "../../store";
import { Cart } from "../../components/Cart/component";
import { UserContextProvider } from "../../components/UserContextProvider/component";
import { RestaurantTabsContainer } from "../../components/Tabs/container";

const LOCAL_STORAGE_KEY = "activeRestaurantIndex";

export const MainPage = () => {
  const [theme, setTheme] = useState("light");
  const [activeRestaurantId, setActiveRestaurantId] = useState(
    () => localStorage.getItem(LOCAL_STORAGE_KEY) || 0
  );

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, activeRestaurantId);
  }, [activeRestaurantId]);

  return (
    <Provider store={store}>
      <UserContextProvider>
        <ThemeContext.Provider value={theme}>
          <Layout>
            <Button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              SwitchTheme
            </Button>
            <RestaurantTabsContainer onTabSelect={setActiveRestaurantId} />
            {/* <RestaurantContainer restaurantId={activeRestaurantId} /> */}
            <Cart />
          </Layout>
        </ThemeContext.Provider>
      </UserContextProvider>
    </Provider>
  );
};
