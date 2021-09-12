import * as CartItemApiUtils from "../util/cartitem_util";

export const RECEIVE_CART_ITEMS = "RECEIVE_CART_ITEMS";
export const RECEIVE_CART_ITEM_PRODUCT = "RECEIVE_CART_ITEM_PRODUCT";
export const UPDATE_CART_ITEM = "";
export const REMOVE_CART_ITEM = "";

export const receiveCartItems = (cartItems) => ({
  type: RECEIVE_CART_ITEMS,
  cartItems,
});

export const receiveCartItemProduct = (cartItem) => ({
  type: RECEIVE_CART_ITEM_PRODUCT,
  cartItem,
});

export const deleteCartItem = (cartItemId) => ({
  type: REMOVE_CART_ITEM,
  cartItemId,
});

export const getCartItems = () => (dispatch) => {
  return CartItemApiUtils.getCartItems().then((cartItems) =>
    dispatch(receiveCartItems(cartItems))
  );
};

export const getCartItemProduct = (cartItemId) => (dispatch) => {
  return CartItemApiUtils.getCartItemProduct(cartItemId).then((cartItem) =>
    dispatch(receiveCartItemProduct(cartItem))
  );
};

export const updateCartItem = (cartItem) => (dispatch) => {
  return CartItemApiUtils.updateCartItem(cartItem).then((cartItem) =>
    dispatch(receiveCartItemProduct(cartItem))
  );
};

export const removeCartItem = (cartItemId) => (dispatch) => {
  return CartItemApiUtils.removeCartItem(cartItemId).then(() =>
    dispatch(deleteCartItem(cartItemId))
  );
};
