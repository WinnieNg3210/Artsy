import * as ProductApiUtil from "../util/product_util";

export const RECEIVE_ALL_PRODUCTS = "RECEIVE_ALL_PRODUCTS";
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";

export const receiveAllProducts = (products) => ({
  type: RECEIVE_ALL_PRODUCTS,
  products,
});

export const receiveProduct = (product, reviews, author) => ({
  type: RECEIVE_PRODUCT,
  product,
  reviews,
  author,
});

export const receiveReview = (review, author) => ({
  type: RECEIVE_REVIEW,
  review,
  author,
});

const removeReview = (reviewId) => ({
  type: REMOVE_REVIEW,
  reviewId,
});

export const fetchProducts = () => (dispatch) => {
  return ProductApiUtil.fetchProducts().then((products) =>
    dispatch(receiveAllProducts(products))
  );
};

export const fetchProduct = (productId) => (dispatch) => {
  return ProductApiUtil.fetchProduct(productId).then((product) =>
    dispatch(receiveProduct(product))
  );
};

export const createReview = (review) => (dispatch) => {
  return ProductApiUtil.createReview(review).then((review) =>
    dispatch(receiveReview(review))
  );
};

export const updateReview = (review) => (dispatch) => {
  return ProductApiUtil.updateReview(review).then((review) =>
    dispatch(receiveReview(review))
  );
};

export const deleteReview = (reviewId) => (dispatch) => {
  return ProductApiUtil.deleteReview(reviewId).then(() =>
    dispatch(removeReview(reviewId))
  );
};
