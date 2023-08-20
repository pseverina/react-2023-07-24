import { useMemo } from "react";
import { UserContext } from "../../contexts/userContext";
import { useState } from "react";
import { useCallback } from "react";

export const UserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const login = useCallback((user) => {
    setCurrentUser(user);
  }, []);

  const logout = useCallback(() => {
    setCurrentUser(null);
  }, []);

  const userContextValue = useMemo(
    () => ({ currentUser, login, logout }),
    [currentUser, login, logout]
  );

  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
};
