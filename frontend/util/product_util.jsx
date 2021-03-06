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

export const fetchSearchProducts = (search) => {
  return $.ajax({
    method: "GET",
    url: `/api/products?search=${search}`,
    // data: { search },
  });
};
