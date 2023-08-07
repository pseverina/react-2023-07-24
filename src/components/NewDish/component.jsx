import { useReducer } from "react";

const DEFAULT_VALUES = {
  dish: '',
  price: '',
  ingredients: []
}

const reducer = (state, {type, payload} = {}) => {
  switch(type) {
    case 'setDish':
      return {...state, dish: payload};
    case 'setPrice':
      return {...state, price: payload};
    case 'setIngredients':
      return {...state, ingredients: payload.split(',')};
    default:
      return state;
  }
}

export const NewDish = () => {  
  const [form, dispatch] = useReducer(reducer, DEFAULT_VALUES)

  return (
    <div>
      <h3>New Dish</h3>
      <div>
        <label>Dish Name</label>
        <input 
          value={form.dish}
          onChange={(event) => dispatch({ type: 'setDish', payload: event.target.value})}
        />
      </div>
      <div>
        <label>Price</label>
        <input
          value={form.price}
          onChange={(event) => dispatch({ type: 'setPrice', payload: event.target.value})}/>
      </div>
      <div>
        <label>Ingredients</label>
        <input          
          value={form.ingredients}
          onChange={(event) => dispatch({ type: 'setIngredients', payload: event.target.value})}/>
      </div>
    </div>
  )
};
  