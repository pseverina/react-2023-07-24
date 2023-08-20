import { UserContainer } from './container';
import { useSelector } from "react-redux";

export const Users = () => {
const users = useSelector((state) => state.user );

return (
    <div>
     {users.ids.map(id => (
      <UserContainer
        key={id}
        userId={id} 
        />
     ))}
    </div>
  );
};
