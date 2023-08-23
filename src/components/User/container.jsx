import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectUserById } from "../../store/features/user/selectors";
import { loadUsersIfNotExist }  from '../../store/features/user/thunks/load-users'
import { selectUsersLoading } from '../../store/features/user/selectors';
import { User } from "./component";

export const UserContainer = ({ userId }) => {
  const isLoading = useSelector(selectUsersLoading);
  const user = useSelector((state) => selectUserById(state, userId));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsersIfNotExist());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <User user={user} />;
};
