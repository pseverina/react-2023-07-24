import { useContext } from "react";
import { Button } from "../Button/component.jsx";
import { UserContext } from "../../contexts/userContext.js";
import { createPortal } from "react-dom";
import { useState } from "react";
import { LoginForm } from "../LoginForm/component.jsx";

export const LoginButton = () => {
  const { currentUser, logout } = useContext(UserContext);
  const [isModalOpened, setIsModalOpened] = useState();

  return (
    <>
      <div>
        {currentUser && <span>{currentUser}</span>}
        <Button
          onClick={() => {
            currentUser ? logout() : setIsModalOpened(true);
          }}
        >
          {currentUser ? "Logout" : "Login"}
        </Button>
      </div>

      {isModalOpened &&
        createPortal(
          <LoginForm onLogin={() => setIsModalOpened(false)} />,
          document.getElementById("modal-container")
        )}
    </>
  );
};
