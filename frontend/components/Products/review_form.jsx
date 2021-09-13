import React from "react";
import { withRouter } from "react-router-dom";

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.review;

    this.handleSubmit = this.handleSubmit.bind(this);
    // this.navigateToProductShow = this.navigateToProductShow.bind(this);
  }

  // navigateToProductShow() {
  //   const url = `products/${this.props.match.params.productId}`;
  //   this.props.history.push(url);
  // }

  handleSubmit(e) {
    e.preventDefault();
    const productId = parseInt(this.props.match.params.productId);
    const review = Object.assign({}, this.state, {
      product_id: productId,
    });
    this.props.createReview(review);
    // this.navigateToProductShow();
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Rating</h1>
          <div>Star Reviews</div>
          <div>
            <label>
              Comment
              <textarea
                value={this.state.content}
                onChange={this.update("content")}
              />
            </label>
          </div>
          <button type="submit">Add Review</button>
        </form>
        {/* <button onClick={this.navigateToProductShow}>Cancel</button> */}

        <h1>HI!</h1>
      </div>
    );
  }
}

export default withRouter(ReviewForm);
