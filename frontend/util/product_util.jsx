export const fetchProducts = () => {
  return $.ajax({
    method: "GET",
    url: "/api/products",
  });
};

export const fetchProduct = (productId) => {
  return $.ajax({
    method: "GET",
    url: `/api/products/${productId}`,
  });
};

// export const fetchReviews = (productId) => {
//   return $.ajax({
//     method: "GET",
//     url: `/api/products/${productId}/reviews`,
//   });
// };

// export const fetchReview = (productId, reviewId) => {
//   return $.ajax({
//     url: `/api/reviews/${productId}/reviews/${reviewId}`,
//     method: "GET",
//   });
// };

// export const createReview = (review) => {
//   return $.ajax({
//     method: "POST",
//     url: "api/reviews/",
//     data: { review },
//   });
// };

// export const updateReview = (review) => {
//   return $.ajax({
//     method: "PATCH",
//     url: `/api/reviews/${review.id}`,
//     data: { review },
//   });
// };

// export const deleteReview = (reviewId) => {
//   return $.ajax({
//     url: `/api/reviews/${reviewId}`,
//     method: "DELETE",
//   });
// };
