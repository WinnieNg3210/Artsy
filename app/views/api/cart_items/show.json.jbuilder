json.extract! @cart_item, :id, :user_id, :product_id, :quantity
json.extract! @cart_item.product, :title, :price
# json.imageUrl @cart_item.product, :image

json.imageUrl url_for(@cart_item.product.image)