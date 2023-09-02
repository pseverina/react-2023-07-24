import { Tab } from "../Tab/component";

export const Tabs = ({ restaurants, onTabSelect }) => {
  return (
    <div>
      {restaurants.map(({ id, name }) => (
        <Tab key={id} title={name} onTabSelect={() => onTabSelect(id)} />
      ))}
    </div>
  );
};
