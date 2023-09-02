import { NewReviewForm } from "./component";
import { useCreateReviewMutation } from "../../store/services/api";

export const NewReviewFormContainer = ({ restaurantId }) => {
  const [createReview, { isLoading }] = useCreateReviewMutation();

  if (isLoading) {
    return <span>Saving...</span>;
  }

  return (
    <NewReviewForm
      onSaveForm={(newReview) => createReview({ newReview, restaurantId })}
    />
  );
};
