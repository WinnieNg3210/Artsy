@reviews.each do |review|
      json.set! review.id do 
            json.extract! review, :id, :content, :rating, :product_id, :author_id
            json.extract! review.author, :first_name
      end
end