import { NewReviewFormContainer } from "../NewReviewForm/container";
import { ReviewContainer } from "../Review/container";

export const Reviews = ({ reviewIds, restaurantId }) => {
  return (
    <div>
      <h3>Reviews</h3>
      <div>
        {!!reviewIds.length &&
          reviewIds.map((reviewId) => (
            <ReviewContainer key={reviewId} reviewId={reviewId} />
          ))}
      </div>
      <NewReviewFormContainer restaurantId={restaurantId} />
    </div>
  );
};
