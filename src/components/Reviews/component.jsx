import { NewReviewFormContainer } from "../NewReviewForm/container";
import { Review } from "../Review/component";

export const Reviews = ({ reviews, restaurantId }) => {
  console.log(reviews);
  return (
    <div>
      <h3>Reviews</h3>
      <div>
        {reviews?.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </div>
      <NewReviewFormContainer restaurantId={restaurantId} />
    </div>
  );
};
