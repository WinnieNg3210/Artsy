import { connect } from "react-redux";
import { fetchProduct, fetchProducts } from "../../actions/product_actions";
import { withRouter } from "react-router";
import ProductIndex from "./product_index";

const mSTP = (state) => ({
  products: Object.values(state.entities.products),
  currentUser: state.entities.users[state.session.id],
});

const mDTP = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()),
});

export default withRouter(connect(mSTP, mDTP)(ProductIndex));
