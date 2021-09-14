import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import productsReducer from "./products_reducer";
import reviewsReducer from "./reviews_reducer";
// import cartItemReducer from "./cart_items_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  products: productsReducer,
  // cartItems: cartItemReducer,
  reviews: reviewsReducer,
});

export default entitiesReducer;
