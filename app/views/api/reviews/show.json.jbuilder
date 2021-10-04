json.extract! @review, :id, :content, :rating, :product_id, :author_id
json.extract! @review.author, :first_name
# json.imageUrl @review.product, :imageUrl