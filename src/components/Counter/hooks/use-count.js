import { useCallback } from "react";
import { useState } from "react";

export function useCount({ defaultCount, min, max, onCountChange }) {
  const [count, setCount] = useState(defaultCount);

  const decrement = useCallback(() => {
    setCount((currentCount) => {
      if (min === undefined || currentCount !== min) {
        const newValue = currentCount - 1;
        onCountChange(newValue);

        return newValue;
      }

      return currentCount;
    });
  }, [min, onCountChange]);

  const increment = useCallback(() => {
    setCount((currentCount) => {
      if (max === undefined || currentCount !== max) {
        const newValue = currentCount + 1;
        onCountChange(newValue);

        return newValue;
      }

      return currentCount;
    });
  }, [max, onCountChange]);

  return { count, decrement, increment };
}
