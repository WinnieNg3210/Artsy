import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import EditReviewForm from "./edit_review_form";

import { fetchReview, updateReview } from "../../actions/review_actions";

class EditReviewFormContainer extends React.Component {
  componentDidMount() {
    this.props.fetchReview(this.props.match.params.reviewId);
  }
  render() {
    const { review, updateReview, user } = this.props;
    if (!user || !review || !(user === review.author_id)) return null;
    return <EditReviewForm review={review} updateReview={updateReview} />;
  }
}

const mSTP = (state, ownProps) => ({
  review: state.entities.reviews[ownProps.match.params.reviewId],
  user: state.session.id,
});

const mDTP = (dispatch) => ({
  fetchReview: (reviewId) => dispatch(fetchReview(reviewId)),
  updateReview: (review, productId) =>
    dispatch(updateReview(review, productId)),
});

export default withRouter(connect(mSTP, mDTP)(EditReviewFormContainer));
