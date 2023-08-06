export const Review = ({ review }) => {
  if (!review) {
    return null;
  }

  return <div>{review.text}</div>;
};
