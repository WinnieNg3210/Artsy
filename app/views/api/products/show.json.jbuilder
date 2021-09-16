# json.set! @product.id do 
#     json.extract! @product, :id, :title, :description, :price, :seller_id
#     # json.imageUrl url_for(product.image)
# end

json.seller @product.seller, :first_name
json.extract! @product, :id, :title, :description, :price, :seller_id
json.reviews @product.reviews, :product_id, :author_id, :content, :rating
json.imageUrl url_for(@product.image) if @product.image.attached?
