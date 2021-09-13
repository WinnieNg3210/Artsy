import React from "react";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import StarIcon from "@material-ui/icons/Star";

class ReviewIndexItem extends React.Component {
  render() {
    const { review } = this.props;

    let ratings = [];
    for (let i = 0; i < 5; i++) {
      if (i < review.rating) {
        ratings.push(<StarIcon fontSize="small" />);
      } else {
        ratings.push(<StarOutlineIcon fontSize="small" />);
      }
    }

    return (
      <div className="reviewers">
        <h1>Reviewed by: {review.first_name}</h1>
        <div className="review-rating-container">
          <div className="review-rating">{ratings}</div>
        </div>
        <div className="review-content">
          <p>{review.content}</p>
        </div>
      </div>
    );
  }
}

export default ReviewIndexItem;
