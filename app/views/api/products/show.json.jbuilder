# json.extract! product, :id, :title, :description, :price, :seller_id

json.set! @product.id do 
    json.extract! @product, :id, :title, :description, :price, :seller_id
end