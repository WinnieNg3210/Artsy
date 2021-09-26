import React from "react";
import ReviewIndexItem from "./review_index_item";

class ReviewIndex extends React.Component {
  componentDidMount() {
    this.props.fetchReviews(this.props.productId);
  }

  render() {
    if (!this.props.reviews) return null;
    // console.log(this.props.reviews);
    const productReviews = this.props.reviews.map((review, i) => {
      // debugger;
      return (
        <ReviewIndexItem
          key={i}
          review={review}
          fetchReviews={this.props.fetchReviews}
          productId={this.props.productId}
          currentUserId={this.props.currentUserId}
          deleteReview={this.props.deleteReview}
        />
      );
    });

    return (
      <div className="reviews-container">
        <p className="total-reviews">{productReviews.length} reviews</p>
        <h1 className="reviews-header">Reviews for this item</h1>
        <div className="reviews-list">{productReviews}</div>
      </div>
    );
  }
}

export default ReviewIndex;