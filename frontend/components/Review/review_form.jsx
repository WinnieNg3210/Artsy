import React from "react";
import { withRouter } from "react-router-dom";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import StarIcon from "@material-ui/icons/Star";

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      rating: 1,
      author_id: this.props.currentUserId,
      product_id: this.props.product.id,
      // hover: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .createReview(this.state, this.props.product.id)
      .then(this.props.addReview(e));
    // .then(this.setState({ content: "" }));
    // debugger;
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    let starRatings = (
      <div>
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <label key={i}>
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
              />
            </label>
          );
        })}
      </div>
    );

    return (
      <div className="review-form">
        <form onSubmit={this.handleSubmit}>
          <h1>Add a Review</h1>
          {/* <div>{this.state.rating}</div> */}
          <div>{starRatings}</div>
          <div className="add-review-textarea">
            <textarea
              rows="10"
              cols="35"
              value={this.state.content}
              onChange={this.update("content")}
            />
          </div>
          <div className="review-buttons">
            <button
              type="submit"
              className="add-review-btn"
              // onClick={() => this.props.addReview()}
            >
              Add Review
            </button>
            <button
              className="cancel-review-btn"
              onClick={this.props.addReview}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(ReviewForm);
