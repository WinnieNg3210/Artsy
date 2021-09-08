class Product < ApplicationRecord
    validates :title, :description, :price, :seller_id
    
    belongs_to :seller,
        foreign_key: :user_id,
        class_name: :User
end
