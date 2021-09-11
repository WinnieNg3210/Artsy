import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ProductShow from "./product_show";
import { fetchProduct } from "../../actions/product_actions";

const mSTP = (state, ownProps) => ({
  product: state.entities.products[ownProps.match.params.productId],
  currentUser: state.entities.users[state.session.id],
});

const mDTP = (dispatch) => ({
  fetchProduct: (productId) => dispatch(fetchProduct(productId)),
});

export default withRouter(connect(mSTP, mDTP)(ProductShow));
