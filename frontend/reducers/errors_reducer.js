import { combineReducers } from "redux";

import sessionErrorsReducer from "./session_errors_reducer";

const errorsReducer = combineReducers({
  loginError: sessionErrorsReducer
});

export default errorsReducer;

// will need checkoutError and reviewError for checkout and review MVP respectively