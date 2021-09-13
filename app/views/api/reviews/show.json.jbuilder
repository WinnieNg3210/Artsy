json.extract! @review, :id, :content, :rating, :product_id, :author_id, :created_at
json.extract! @review.author, :first_name