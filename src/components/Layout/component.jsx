import { Button } from '../Button/component'
import { useDispatch, useSelector } from "../../custome-redux";

export const Layout = ({ children }) => {
  const user = useSelector((state) => state);
  const dispatch = useDispatch();
  const isLoggedIn = user.userName?.length

  const login = () => {
    dispatch({ type: "login" });
  };

  const logout = () => {
    dispatch({ type: "logout" });
  };

  return (
    <div>
      <header className="clipping-container">
        Welcome
        {isLoggedIn
          ? <b onClick={logout}>{user.userName}</b>
          : <Button onClick={login}>Login</Button>
        }
      </header>
      <main>{children}</main>
      <footer>footer</footer>
    </div>
  );
};
