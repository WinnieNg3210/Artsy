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

// search products

export const fetchSearchProducts = (products) => {
  return $.ajax({
    method: "POST",
    url: `/api/search?q=${products}`,
    data: { products },
  });
};
