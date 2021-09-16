import React from "react";
import { connect } from "react-redux";
import { showModal } from "../../actions/modal_actions";
import { withRouter } from "react-router";
import Header from "./header";
import { logout } from "../../actions/session_actions";

import { getCartItem, getCartItems } from "../../actions/cart_item_actions";

const mapStateToProps = ({ session, entities: { users, cartItems } }) => ({
  currentUser: users[session.id],
  cartItems: Object.values(cartItems),
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  showModal: (modal) => dispatch(showModal(modal)),
  getCartItem: (cartItemId) => dispatch(getCartItem(cartItemId)),
  getCartItems: () => dispatch(getCartItems()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
