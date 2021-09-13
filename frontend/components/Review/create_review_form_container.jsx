import { connect } from "react-redux";
// import { withRouter } from "react-router-dom";
import ReviewForm from "./review_form";
import { createReview } from "../../actions/review_actions";

const mSTP = (state) => ({
  currentUserId: state.session.id,
});

const mDTP = (dispatch) => ({
  createReview: (review, productId) =>
    dispatch(createReview(review, productId)),
});

export default connect(mSTP, mDTP)(ReviewForm);
