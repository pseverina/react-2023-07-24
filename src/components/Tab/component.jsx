import { Button } from "../Button/component";

export const Tab = ({ title, onTabSelect }) => {
  return <Button onClick={onTabSelect}>{title}</Button>;
};
