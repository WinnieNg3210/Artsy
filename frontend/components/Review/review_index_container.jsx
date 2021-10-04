import { connect } from "react-redux";
import {
  fetchReviews,
  createReview,
  updateReview,
  deleteReview,
} from "../../actions/review_actions";
import ReviewIndex from "./review_index";
import { withRouter } from "react-router";

const mSTP = (state, ownProps) => ({
  reviews: Object.values(state.entities.reviews),
  product: state.entities.products[ownProps.match.params.productId],
  currentUserId: state.session.id,
});

const mDTP = (dispatch) => ({
  fetchReviews: (productId) => dispatch(fetchReviews(productId)),
  createReview: (review, productId) =>
    dispatch(createReview(review, productId)),
  updateReview: (review, productId) =>
    dispatch(updateReview(review, productId)),
  deleteReview: (reviewId, productId) =>
    dispatch(deleteReview(reviewId, productId)),
});

export default withRouter(connect(mSTP, mDTP)(ReviewIndex));
