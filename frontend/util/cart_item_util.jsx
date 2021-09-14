export const getCartItems = () => {
  return $.ajax({
    method: "GET",
    url: "/api/cart_items",
  });
};

export const getCartItem = (cartItemId) => {
  return $.ajax({
    method: "GET",
    url: `/api/cart_items/${cartItemId}/`,
  });
};

export const createCartItem = (cartItem) => {
  return $.ajax({
    method: "POST",
    url: "api/cart_items",
    data: { cartItem },
  });
};

export const updateCartItem = (cartItem) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/cart_items/${cartItem.id}`,
    data: { cartItem },
  });
};

export const deleteCartItem = (cartItem) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/cart_items/${cartItem.id}`,
  });
};
