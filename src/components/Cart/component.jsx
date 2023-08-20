import { useSelector } from "react-redux";

export const Cart = () => {
  const cart = useSelector((state) => state.cart);

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
