import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { showModal, hideModal } from "../../actions/modal_actions";
import Checkout from "./checkout";
import { deleteCartItem } from "../../actions/cart_item_actions";

const mSTP = (state) => ({
  cartItems: Object.values(state.entities.cartItems),
});

const mDTP = (dispatch) => ({
  hideModal: () => dispatch(hideModal()),
  deleteCartItem: (cartItemId) => dispatch(deleteCartItem(cartItemId)),
});

export default withRouter(connect(mSTP, mDTP)(Checkout));
