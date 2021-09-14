@cart_items.each do |cart_item|
    json.set! cart_item.id do
        json.extract! cart_item, :id, :user_id, :product_id, :quantity
        json.extract! cart_item.product, :title, :price
        # json.photoUrl url_for(cart_item.product.image) if cart_item.product.image.attached?
    end
end