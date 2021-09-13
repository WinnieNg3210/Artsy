@reviews.each do |review|
      json.set! review.id do 
            json.extract! review, :id, :content, :rating, :product_id, :author_id
      end
end