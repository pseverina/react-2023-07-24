import { useSelector } from "react-redux";
import { selectReviewById } from "../../store/features/review/selectors";
import { Review } from "./component";

export const ReviewContainer = ({ reviewId }) => {
  const review = useSelector((state) => selectReviewById(state, reviewId));

  if (!review) {
    return null;
  }

  return <Review review={review} />;
};
