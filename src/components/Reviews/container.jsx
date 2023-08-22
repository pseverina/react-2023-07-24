import { useSelector } from "react-redux";
import { Reviews } from "./component";
import { selectRestaurantReviewsById } from "../../store/features/restaurant/selectors";

export const ReviewsContainer = ({ restaurantId }) => {
  const reviewIds = useSelector((state) =>
    selectRestaurantReviewsById(state, restaurantId)
  );

  return <Reviews reviewIds={reviewIds} />;
};
