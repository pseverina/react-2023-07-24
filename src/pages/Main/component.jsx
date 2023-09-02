import { Layout } from "../../components/Layout/component";
import { useState } from "react";
import { Button } from "../../components/Button/component";
import { ThemeContext } from "../../contexts/themeContext";
import { UserContextProvider } from "../../components/UserContextProvider/component";
import { Restaurants } from "../../components/Restaurants/component";

export const MainPage = () => {
  const [theme, setTheme] = useState("light");

  return (
    <UserContextProvider>
      <ThemeContext.Provider value={theme}>
        <Layout>
          <Button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            SwitchTheme
          </Button>
          <Restaurants />
        </Layout>
      </ThemeContext.Provider>
    </UserContextProvider>
  );
};
