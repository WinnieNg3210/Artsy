import {
  RECEIVE_CART_ITEM,
  RECEIVE_CART_ITEMS,
  REMOVE_CART_ITEM,
} from "../actions/cart_item_actions";

const cartItemReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_CART_ITEMS:
      let cartItemsArr = Object.values(action.cartItems);
      cartItemsArr.forEach((cartItem) => {
        nextState[cartItem.id] = cartItem;
      });
      return nextState;
    case RECEIVE_CART_ITEM:
      // console.log(action);
      nextState[action.cartItem.id] = action.cartItem;
      return nextState;
    case REMOVE_CART_ITEM:
      delete nextState[action.cartItemId.id];
      return nextState;
    default:
      return state;
  }
};

export default cartItemReducer;
