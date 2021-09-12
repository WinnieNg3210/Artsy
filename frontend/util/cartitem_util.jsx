export const getCartItems = () => {
  return $.ajax({
    method: "GET",
    url: "/api/cart_items",
  });
};

export const getCartItemProduct = (cartItemId) => {
  return $.ajax({
    method: "GET",
    url: `/api/cart_items/${cartItemId}/`,
  });
};

export const createCartItem = (cart_item) => {
  return $.ajax({
    method: "POST",
    url: "api/cart_items",
    // data: { cart_item },
    data: cart_item,
  });
};

export const updateCartItem = (cartItem) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/cart_items/${cartItem.id}`,
    data: { cartItem },
  });
};

export const removeCartItem = (cartItem) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/cart_items/${cartItem.id}`,
  });
};
