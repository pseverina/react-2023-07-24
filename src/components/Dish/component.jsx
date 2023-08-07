import { Counter } from '../Counter/component'

export const Dish = ({ dish }) => {
  return (
    <div>
      <span>{dish.name}</span>&nbsp;
      <Counter price={dish.price}/>
    </div>
  )
};
