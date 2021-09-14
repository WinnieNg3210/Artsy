// import {
//   RECEIVE_CART_ITEM_PRODUCT,
//   RECEIVE_CART_ITEMS,
//   REMOVE_CART_ITEM,
//   UPDATE_CART_ITEM,
// } from "../actions/cart_actions";

// const cartItemReducer = (state = {}, action) => {
//   Object.freeze(state);
//   let nextState = Object.assign({}, state);
//   switch (action.type) {
//     case RECEIVE_CART_ITEMS:
//       return action.cartItems;
//     case RECEIVE_CART_ITEM_PRODUCT:
//       nextState[action.cartItem.id] = action.cartItem;
//       return nextState;
//     case REMOVE_CART_ITEM:
//       delete nextState[action.cartItemId];
//       return nextState;
//     default:
//       return state;
//   }
// };

// export default cartItemReducer;
