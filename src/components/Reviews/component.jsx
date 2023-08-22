import { NewReviewForm } from "../NewReviewForm/component";
import { ReviewContainer } from "../Review/container";

export const Reviews = ({ reviewIds }) => {
  return (
    <div>
      <h3>Reviews</h3>
      <div>
        {!!reviewIds.length &&
          reviewIds.map((reviewId) => (
            <ReviewContainer key={reviewId} reviewId={reviewId} />
          ))}
      </div>
      <NewReviewForm />
    </div>
  );
};
