import {
  RECEIVE_REVIEW,
  REMOVE_REVIEW,
  RECEIVE_PRODUCT,
} from "../actions/product_actions";

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);

  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_PRODUCT:
      return Object.assign({}, state, action.reviews);
    case RECEIVE_REVIEW:
      nextState[action.review.id] = action.review;
      return nextState;
    case REMOVE_REVIEW:
      delete nextState[action.review.id];
      return nextState;
    default:
      return state;
  }
};

export default reviewsReducer;
