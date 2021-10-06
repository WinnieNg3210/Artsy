// import React from "react";
import { connect } from "react-redux";
import { fetchSearchProducts } from "../../actions/product_actions";
import { withRouter } from "react-router";
import Search from "./search";
import { fetchProducts } from "../../util/product_util";

const mSTP = (state) => ({
  products: Object.values(state.entities.products),
});

const mDTP = (dispatch) => ({
  fetchSearchProducts: (products) => dispatch(fetchSearchProducts(products)),
  fetchProducts: () => dispatch(fetchProducts()),
});

export default withRouter(connect(mSTP, mDTP)(Search));
