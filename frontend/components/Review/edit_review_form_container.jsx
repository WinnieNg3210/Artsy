import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import EditReviewForm from "./edit_review_form";

import { fetchReview, updateReview } from "../../actions/review_actions";
import { fetchProduct } from "../../actions/product_actions";

class EditReviewFormContainer extends React.Component {
  componentDidMount() {
    this.props.fetchReview(
      this.props.match.params.reviewId,
      this.props.match.params.productId
    );
    this.props.fetchProduct(this.props.match.params.productId);
  }
  render() {
    console.log(this.props.product);
    const { review, updateReview, user, product } = this.props;
    if (!user || !review || !(user === review.author_id)) return null;
    return (
      <EditReviewForm
        review={review}
        updateReview={updateReview}
        product={product}
        fetchReview={this.props.fetchReview}
        fetchProduct={this.props.fetchProduct}
        // imageUrl={product.imageUrl}
      />
    );
  }
}

const mSTP = (state, ownProps) => ({
  product: state.entities.products[ownProps.match.params.productId],
  review: state.entities.reviews[ownProps.match.params.reviewId],
  user: state.session.id,
});

const mDTP = (dispatch) => ({
  fetchProduct: (productId) => dispatch(fetchProduct(productId)),
  fetchReview: (reviewId, productId) =>
    dispatch(fetchReview(reviewId, productId)),
  updateReview: (review, productId) =>
    dispatch(updateReview(review, productId)),
});

export default withRouter(connect(mSTP, mDTP)(EditReviewFormContainer));
