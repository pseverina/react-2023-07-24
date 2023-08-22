import { UserContainer } from "../User/container";

export const Review = ({ review }) => {
  if (!review) {
    return null;
  }

  return (
    <div>
      <span>{review.text}</span>
      <UserContainer userId={review.userId} />
    </div>
  );
};
