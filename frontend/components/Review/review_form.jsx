import React from "react";
import { withRouter } from "react-router-dom";

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      rating: 5,
      author_id: this.props.currentUserId,
      product_id: this.props.product.id,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createReview(this.state, this.props.product.id);
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Add a Review</h1>
          <div>Star Rating</div>
          <div>
            <label>
              Comment
              <br />
              <textarea
                value={this.state.content}
                onChange={this.update("content")}
              />
            </label>
          </div>
          <button type="submit">Add Review</button>
        </form>
      </div>
    );
  }
}

export default withRouter(ReviewForm);
