import { connect } from "react-redux";
// import { withRouter } from "react-router-dom";
import ReviewForm from "./review_form";
import { createReview } from "../../actions/product_actions";

const mSTP = (state) => ({
  review: {
    rating: 1,
    content: "",
  },

  formType: "Add a Review",
});

const mDTP = (dispatch) => ({
  createReview: (review) => dispatch(createReview(review)),
});

export default connect(mSTP, mDTP)(ReviewForm);
