import { connect } from "react-redux";

import {
  getCartItems,
  getCartItem,
  updateCartItem,
  deleteCartItem,
} from "../../actions/cart_item_actions";

import CartItemIndex from "./cart_item_index";
import { showModal } from "../../actions/modal_actions";

const mSTP = (state) => ({
  cartItems: Object.values(state.entities.cartItems),
  user: state.session.id,
  currentUser: state.entities.users[state.session.id],
});

const mDTP = (dispatch) => ({
  getCartItems: () => dispatch(getCartItems()),
  getCartItem: (cartItemId) => dispatch(getCartItem(cartItemId)),
  updateCartItem: (cartItem) => dispatch(updateCartItem(cartItem)),
  deleteCartItem: (cartItemId) => dispatch(deleteCartItem(cartItemId)),
  showModal: (modal) => dispatch(showModal(modal)),
});

export default connect(mSTP, mDTP)(CartItemIndex);
