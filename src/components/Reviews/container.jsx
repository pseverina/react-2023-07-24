import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Reviews } from "./component";
import { loadReviewsIfNotExist }  from '../../store/features/review/thunks/load-reviews'
import { selectRestaurantReviewsById } from "../../store/features/restaurant/selectors";
import { selectReviewsLoading } from "../../store/features/review/selectors";

export const ReviewsContainer = ({ restaurantId }) => {
  const isLoading = useSelector(selectReviewsLoading);
  const reviewIds = useSelector((state) =>
    selectRestaurantReviewsById(state, restaurantId)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadReviewsIfNotExist(restaurantId));
  }, [dispatch, restaurantId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <Reviews reviewIds={reviewIds} />;
};
