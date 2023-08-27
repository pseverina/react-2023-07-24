import { NewReviewForm } from "./component";
import { createReview as createReviewThunk } from "../../store/features/review/thunks/create-review";
import { useMakeRequest } from "../../hooks/use-make-request";

export const NewReviewFormContainer = ({ restaurantId }) => {
  const [status, createReview] = useMakeRequest(createReviewThunk);

  return (
    <NewReviewForm
      onSaveForm={(newReview) => createReview({ newReview, restaurantId })}
    />
  );
};
