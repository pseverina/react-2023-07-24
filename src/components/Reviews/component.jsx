import { NewReviewForm } from "../NewReviewForm/component";
import { Review } from "../Review/component";

export const Reviews = ({ reviews }) => {
  return (
    <div>
      <h3>Reviews</h3>
      <div>
        {!!reviews.length &&
          reviews.map((review) => <Review key={review.id} review={review} />)}
      </div>
      <NewReviewForm />
    </div>
  );
};
