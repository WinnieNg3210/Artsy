@cart_items.each do |cart_item|
    json.set! cart_item.id do
        json.extract! cart_item, :id, :user_id, :product_id, :quantity
        json.extract! cart_item.product, :title, :price
        # json.imageUrl cart_item.product.imageUrl
        # json.photoUrl url_for(cart_item.product.image) if cart_item.product.image.attached?

        # we have to do it this way because we currently have an id online line 2 and another id on line3 so therefore it won't update because the line2 id overrides line3 id
    end
end