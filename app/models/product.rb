class Product < ApplicationRecord
    validate :title, :description, :price, :seller_id
    
    belongs_to :seller,
        foreign_key: :seller_id,
        class_name: :User
end
