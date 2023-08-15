import { useReducer } from "react";

const DEFAULT_VALUE = {
  name: "",
  price: "",
  ingredients: [],
};

const FORM_ACTION = {
  setName: "setName",
  setPrice: "setPrice",
  setIngredients: "setIngredients",
};

const reducer = (state, { type, payload } = {}) => {
  switch (type) {
    case FORM_ACTION.setName:
      return { ...state, name: payload };
    case FORM_ACTION.setPrice:
      return { ...state, price: payload };
    case FORM_ACTION.setIngredients:
      return { ...state, ingredients: payload.split(",") };
    default:
      return state;
  }
};

export const NewDish = () => {
  const [form, dispatch] = useReducer(reducer, DEFAULT_VALUE);

  return (
    <div>
      <div>
        <label>Name</label>
        <input
          value={form.name}
          onChange={(event) =>
            dispatch({ type: FORM_ACTION.setName, payload: event.target.value })
          }
        />
      </div>
      <div>
        <label>Price</label>
        <input
          value={form.price}
          onChange={(event) =>
            dispatch({
              type: FORM_ACTION.setPrice,
              payload: event.target.value,
            })
          }
        />
      </div>
      <div>
        <label>ingredients</label>
        <input
          value={form.ingredients}
          onChange={(event) =>
            dispatch({
              type: FORM_ACTION.setIngredients,
              payload: event.target.value,
            })
          }
        />
      </div>
    </div>
  );
};
