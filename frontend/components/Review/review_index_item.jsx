import React from "react";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import StarIcon from "@material-ui/icons/Star";
import { Link } from "react-router-dom";

class ReviewIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    // this.handleEdit = this.handleEdit.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props
      .deleteReview(this.props.review, this.props.productId)
      .then(this.props.fetchReviews(this.props.productId));
    // this.props.fetchReviews(this.props.productId);
    // location.reload();
  }

  render() {
    const { review } = this.props;
    // console.log(this.props);
    let ratings = [];
    for (let i = 0; i < 5; i++) {
      if (i < review.rating) {
        ratings.push(<StarIcon fontSize="small" key={i} />);
      } else {
        ratings.push(<StarOutlineIcon fontSize="small" key={i} />);
      }
    }

    let deleteButton;
    let editButton;

    if (review.author_id === this.props.currentUserId) {
      deleteButton = (
        <div className="delete-review">
          <button onClick={this.handleDelete} className="delete-review-btn">
            Delete
          </button>
        </div>
      );

      editButton = (
        <Link to={`/reviews/${review.id}`} className="edit-review">
          <button className="edit-review-btn">Edit</button>
        </Link>
      );
    }

    return (
      <div className="reviewers">
        <h1>{review.first_name}</h1>
        <div className="review">
          <div className="review-rating-container">
            <div className="review-rating">{ratings}</div>
          </div>
          <div className="review-content">
            <p>{review.content}</p>
          </div>
          <div className="edit-delete-buttons">
            {deleteButton}
            {editButton}
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewIndexItem;
