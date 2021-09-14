import React from "react";
import { withRouter } from "react-router";
import StarIcon from "@material-ui/icons/Star";

class EditReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.review;
    this.navigateToProductShow = this.navigateToProductShow.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const productId = this.props.review.product_id;
    const review = Object.assign({}, this.state, {
      product_id: productId,
      author_id: this.props.user,
    });

    this.props.updateReview(review, productId);
    this.navigateToProductShow();
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  navigateToProductShow() {
    const url = `/products/${this.props.review.product_id}`;
    this.props.history.push(url);
  }

  render() {
    let starRatings = (
      <div className="edit-star-rating">
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <label>
              <input
                type="radio"
                name="rating"
                className="star-radio"
                value={ratingValue}
                onClick={() => this.setState({ rating: ratingValue })}
              />
              <StarIcon
                key={i}
                className="star"
                style={{
                  color: ratingValue <= this.state.rating ? "black" : "grey",
                }}
                fontSize="small"
                onMouseEnter={() => this.setState({ hover: ratingValue })}
                onMouseLeave={() => this.setState({ hover: null })}
              />
            </label>
          );
        })}
      </div>
    );

    return (
      <div className="review-edit-form">
        <form onSubmit={this.handleSubmit}>
          <h1>Edit Your Review</h1>
          {starRatings}
          <textarea
            rows="10"
            cols="50"
            value={this.state.content}
            onChange={this.update("content")}
          />
          <br />
          <input type="submit" className="edit-review-submit-button" />
        </form>
      </div>
    );
  }
}

export default withRouter(EditReviewForm);
