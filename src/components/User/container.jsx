
import { useSelector } from "react-redux";
import { selectUserById } from "../../store/features/users/selectors";

export const UserContainer = ({ userId }) => {
    const user = useSelector((state) => selectUserById(state, userId));

  return (
    <div>
      <h5>{user.name}</h5>
    </div>
  );
};