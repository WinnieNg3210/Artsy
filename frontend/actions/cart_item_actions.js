import * as CartItemApiUtils from "../util/cart_item_util";

export const RECEIVE_CART_ITEMS = "RECEIVE_CART_ITEMS";
export const RECEIVE_CART_ITEM = "RECEIVE_CART_ITEM";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";

export const receiveCartItems = (cartItems) => ({
  type: RECEIVE_CART_ITEMS,
  cartItems,
});

export const receiveCartItem = (cartItem) => ({
  type: RECEIVE_CART_ITEM,
  cartItem,
});

export const removeCartItem = (cartItemId) => ({
  type: REMOVE_CART_ITEM,
  cartItemId,
});

export const getCartItems = () => (dispatch) => {
  return CartItemApiUtils.getCartItems().then((cartItems) =>
    dispatch(receiveCartItems(cartItems))
  );
};

export const getCartItem = (cartItemId) => (dispatch) => {
  return CartItemApiUtils.getCartItem(cartItemId).then((cartItem) =>
    dispatch(receiveCartItem(cartItem))
  );
};

export const updateCartItem = (cartItem) => (dispatch) => {
  return CartItemApiUtils.updateCartItem(cartItem).then((cartItem) =>
    dispatch(receiveCartItem(cartItem))
  );
};

export const deleteCartItem = (cartItemId) => (dispatch) => {
  return CartItemApiUtils.deleteCartItem(cartItemId).then(() =>
    dispatch(removeCartItem(cartItemId))
  );
};

export const createCartItem = (cartItem) => (dispatch) => {
  return CartItemApiUtils.createCartItem(cartItem).then((cartItem) =>
    dispatch(receiveCartItem(cartItem))
  );
};
