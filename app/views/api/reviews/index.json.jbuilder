@reviews.each do |review|
      json.set! review.id do 
            json.extract! review, :id, :content, :rating, :product_id, :author_id, :created_at
            json.extract! review.author, :first_name
      end
end