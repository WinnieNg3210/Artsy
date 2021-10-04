import * as ReviewApiUtil from "../util/review_util";

export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";

export const receiveAllReviews = (reviews) => ({
  type: RECEIVE_ALL_REVIEWS,
  reviews,
});

export const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review,
});

const removeReview = (reviewId) => ({
  type: REMOVE_REVIEW,
  reviewId,
});

export const fetchReviews = (productId) => (dispatch) => {
  return ReviewApiUtil.fetchReviews(productId).then((reviews) =>
    dispatch(receiveAllReviews(reviews))
  );
};

export const fetchReview = (reviewId, productId) => (dispatch) => {
  return ReviewApiUtil.fetchReview(reviewId, productId).then((review) =>
    dispatch(receiveReview(review))
  );
};

export const createReview = (review, productId) => (dispatch) => {
  return ReviewApiUtil.createReview(review, productId).then((review) =>
    dispatch(receiveReview(review))
  );
};

export const updateReview = (review, productId) => (dispatch) => {
  return ReviewApiUtil.updateReview(review, productId).then((review) =>
    dispatch(receiveReview(review))
  );
};

export const deleteReview = (reviewId, productId) => (dispatch) => {
  return ReviewApiUtil.deleteReview(reviewId, productId).then(() =>
    dispatch(removeReview(reviewId))
  );
};
