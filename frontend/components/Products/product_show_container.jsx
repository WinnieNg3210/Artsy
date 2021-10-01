import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ProductShow from "./product_show";
import { fetchProduct } from "../../actions/product_actions";
import {
  getCartItem,
  createCartItem,
  getCartItems,
} from "../../actions/cart_item_actions";
import { showModal } from "../../actions/modal_actions";

const mSTP = (state, ownProps) => ({
  product: state.entities.products[ownProps.match.params.productId],
  currentUser: state.entities.users[state.session.id],
  user: state.session.id,
  cartItems: Object.values(state.entities.cartItems),
  // reviews: Array.from(
  //   state.entities.products[ownProps.match.params.productId].reviews
  // ),
});

const mDTP = (dispatch) => ({
  fetchProduct: (productId) => dispatch(fetchProduct(productId)),
  createCartItem: (cartItem) => dispatch(createCartItem(cartItem)),
  getCartItems: () => dispatch(getCartItems()),
  getCartItem: (cartItemId) => dispatch(getCartItem(cartItemId)),
  showModal: (modal) => dispatch(showModal(modal)),
});

export default withRouter(connect(mSTP, mDTP)(ProductShow));
