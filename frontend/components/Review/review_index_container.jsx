import { connect } from "react-redux";
import { fetchReviews, createReview } from "../../actions/review_actions";
import ReviewIndex from "./review_index";
import { withRouter } from "react-router";

const mSTP = (state) => ({
  reviews: Object.values(state.entities.reviews),
});

const mDTP = (dispatch) => ({
  fetchReviews: (productId) => dispatch(fetchReviews(productId)),
  createReview: (review, productId) =>
    dispatch(createReview(review, productId)),
});

export default withRouter(connect(mSTP, mDTP)(ReviewIndex));
