import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
// import * as SessionApiUtil from "./util/session_api_util";
// import { login, signup, logout } from "./actions/session_actions";
import Root from "./components/root";
import { fetchProducts } from "./actions/product_actions";

document.addEventListener("DOMContentLoaded", () => {
  // window.login = SessionApiUtil.login
  // window.signup = SessionApiUtil.signup
  // window.logout = SessionApiUtil.logout

  //   const store = configureStore();

  // window.login = login
  // window.signup = signup
  // window.logout = logout
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser },
      },
      session: { id: window.currentUser.id },
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchProducts = fetchProducts;

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});
