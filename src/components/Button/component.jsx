import { useContext } from "react";
import { useRef } from "react";
import { ThemeContext } from "../../contexts/themeContext";

export const Button = ({ children, onClick, disabled }) => {
  const ref = useRef(1); // {current: 1}
  const theme = useContext(ThemeContext);

  console.log("theme: ", theme);

  return (
    <button
      ref={ref}
      onClick={() => {
        onClick();
        clearInterval(ref.current);
        ref.current = undefined;
      }}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
