import React from "react";
import ReviewListItemContainer from "./review_list_item_container";

const reviewList = (reviews) =>
  reviews.map((review) => (
    <ReviewListItemContainer review={review} key={review.id} />
  ));

const ProductReviews = ({ reviews }) => {
  return (
    <div>
      <div className="reviews">
        <h1>Review</h1>
        {reviewList(reviews)}
      </div>
    </div>
  );
};

export default ProductReviews;
