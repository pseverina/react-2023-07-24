import { useSelector } from "../../custome-redux";

export const Cart = () => {
  const cart = useSelector((state) => state);

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {Object.entries(cart).map(([name, count]) => (
          <li key={name}>
            {name}: {count}
          </li>
        ))}
      </ul>
    </div>
  );
};
