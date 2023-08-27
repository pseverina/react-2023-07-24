import { useDispatch, useSelector } from "react-redux";
import { Reviews } from "./component";
import { selectRestaurantReviewsById } from "../../store/features/restaurant/selectors";
import { useEffect } from "react";
import { loadReviewsByRestaurantIfNotExist } from "../../store/features/review/thunks/load-reveiws-by-restaurant";
import { loadUsersIfNotExist } from "../../store/features/user/thunks/load-users";
import { useRequest } from "../../hooks/use-request";
import { LOADING_STATUS } from "../../constants/loading-statuses";

export const ReviewsContainer = ({ restaurantId }) => {
  const reviewIds = useSelector((state) =>
    selectRestaurantReviewsById(state, restaurantId)
  );

  const dispatch = useDispatch();

  const status = useRequest(loadReviewsByRestaurantIfNotExist, restaurantId);

  useEffect(() => {
    dispatch(loadUsersIfNotExist());
  }, [dispatch]);

  if (status === LOADING_STATUS.loading) {
    return <span>Loading....</span>;
  }

  return <Reviews reviewIds={reviewIds} restaurantId={restaurantId} />;
};
