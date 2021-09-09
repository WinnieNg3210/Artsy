@products.each do |product|
    json.set! product.id do 
        json.extract! product, :id, :title, :description, :price, :seller_id
        # json.imageUrl url_for(product.image)
    end
end