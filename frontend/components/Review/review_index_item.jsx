import React from "react";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import StarIcon from "@material-ui/icons/Star";
import { Link } from "react-router-dom";
import EditReviewFormContainer from "../Review/edit_review_form_container";

class ReviewIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editingReview: false,
    };

    // this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.removeReview = this.removeReview.bind(this);
  }

  handleEdit(e) {
    e.preventDefault();
    this.setState({ editingReview: !this.state.editingReview });
  }

  removeReview() {
    // e.preventDefault();
    this.props.handleDelete(this.props.review, this.props.productId);
  }

  render() {
    const { review, productId } = this.props;
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
          <button onClick={this.removeReview} className="delete-review-btn">
            Delete
          </button>
        </div>
      );

      editButton = (
        <Link
          to={`/products/${productId}/reviews/${review.id}`}
          className="edit-review"
        >
          <button className="edit-review-btn">Edit</button>
        </Link>
      );
    }

    return (
      <div className="reviewers">
        <div className="reviewer-name">
          <h1>{review.first_name}</h1>
        </div>
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
          {/* {editForm} */}
        </div>
      </div>
    );
  }
}

export default ReviewIndexItem;
