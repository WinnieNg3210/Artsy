class Review < ApplicationRecord
    validates :product_id, :author_id, :content, presence: true
    validates :rating, inclusion: { in: [1,2,3,4,5]}
    

    belongs_to :product,
        foreign_key: :product_id,
        class_name: :Product
    
    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User
end