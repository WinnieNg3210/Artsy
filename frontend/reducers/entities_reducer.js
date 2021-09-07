import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
// import productsReducer from "./products_reducer";


const entitiesReducer = combineReducers({
  users: usersReducer,
  // products: productsReducer
});

export default entitiesReducer;

// will need to git merge for productsReducer to show up on entities