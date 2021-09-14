import React from "react";
import ReviewIndexItem from "./review_index_item";

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchReviews(this.props.productId);
    // because we're passing the productId from the productShow page; we are passing the productId as a props
    // therefore we need to do this.props.productId
    // when we connect ReviewIndexContainer, we don't have to connect productId to ReviewIndexContainer
  }

  render() {
    if (!this.props.reviews || this.props.reviews.length === 0) return null;
    // console.log(this.props.reviews);
    const allReviews = this.props.reviews.map((review, i) => {
      // debugger;
      return (
        <ReviewIndexItem
          key={i}
          review={review}
          // reviewId={review.id}
          fetchReviews={this.props.fetchReviews}
          productId={this.props.productId}
          currentUserId={this.props.currentUserId}
          deleteReview={this.props.deleteReview}
        />
      );
    });

    return (
      <div className="reviews-container">
        <p className="total-reviews">{allReviews.length} reviews</p>
        <h1 className="reviews-header">Reviews for this item</h1>
        <div className="reviews-list">{allReviews}</div>
      </div>
    );
  }
}

export default ReviewIndex;
