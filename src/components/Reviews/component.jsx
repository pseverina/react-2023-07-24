import { NewReviewForm } from "../NewReviewForm/component";
import { Review } from "../Review/component";
import { useSelector } from "react-redux";
import { selectReviewById } from '../../store/features/reviews/selectors'

export const Reviews = ({ reviewId }) => {
  const review = useSelector((state) =>
    selectReviewById(state, reviewId)
  );
  return (
    <div>
      <h3>Reviews</h3>
      <div>
        {!!reviewId.length && <Review key={review.id} review={review} />}
      </div>
      <NewReviewForm />
    </div>
  );
};
