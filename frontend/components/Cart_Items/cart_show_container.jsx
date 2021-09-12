import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CartShow from "./cart_show";
import {
  getCartItemProduct,
  getCartItems,
  updateCartItem,
  removeCartItem,
} from "../../actions/cart_actions";

const mSTP = (state) => ({
  products: state.entities.products,
  cartItems: Object.values(state.entities.cartItems),
});

const mDTP = (dispatch) => ({
  getCartItems: () => dispatch(getCartItems),
  // updateCartItem:
});

export default connect(mSTP, mDTP)(CartShow);
