import ReactDOM from "react-dom/client";
import { MainPage } from "./pages/Main/component";
import { Provider } from "react-redux";
import { store } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <MainPage />
  </Provider>
);
