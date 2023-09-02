import { useGetReviewsQuery } from "../../store/services/api";
import { Reviews } from "./component";

export const ReviewsContainer = ({ restaurantId }) => {
  const { data: reviews, isFetching } = useGetReviewsQuery(restaurantId, {
    skip: !restaurantId,
  });

  if (isFetching) {
    return <span>Loading....</span>;
  }

  return <Reviews reviews={reviews} restaurantId={restaurantId} />;
};
