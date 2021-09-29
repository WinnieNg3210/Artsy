import {
  RECEIVE_ALL_PRODUCTS,
  RECEIVE_PRODUCT,
  SEARCH_PRODUCTS,
} from "../actions/product_actions";

const productsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_ALL_PRODUCTS:
      let productsArr = Object.values(action.products);
      productsArr.forEach((product) => {
        nextState[product.id] = product;
      });

      return nextState;
    // console.log(action.products);
    // return action.products;
    case RECEIVE_PRODUCT:
      nextState[action.product.id] = action.product;
      return nextState;
    case SEARCH_PRODUCTS:
      let searchProductsArr = Object.values(action.products);
      searchProductsArr.forEach((product) => {
        nextState[product.id] = product;
      });
      return nextState;
    default:
      return state;
  }
};

export default productsReducer;
