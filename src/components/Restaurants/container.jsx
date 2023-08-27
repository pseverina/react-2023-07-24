import { useDispatch, useSelector } from "react-redux";
import { Restaurants } from "./component";
import { useEffect } from "react";
import { loadRestaurantsIfNotExist } from "../../store/features/restaurant/thunks/load-restaurants";
import { REQUEST_ID } from "../../store/features/request/constants";
import { selectRequestStatus } from "../../store/features/request/selectors";
import { LOADING_STATUS } from "../../constants/loading-statuses";

export const RestaurantsContainer = () => {
  const loadingStatus = useSelector((state) =>
    selectRequestStatus(state, REQUEST_ID.restaurants)
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurantsIfNotExist(REQUEST_ID.restaurants));
  }, [dispatch]);

  if (loadingStatus === LOADING_STATUS.loading) {
    return <div>Loading...</div>;
  }

  return <Restaurants />;
};
