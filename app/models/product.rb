class Product < ApplicationRecord
    validates :title, :description, :price, :seller_id, presence: true
    
    belongs_to :seller,
        foreign_key: :seller_id,
        class_name: :User

    has_many :reviews,
        foreign_key: :product_id,
        class_name: :Review

    has_many :cart_items,
        foreign_key: :product_id,
        class_name: :CartItem    

    has_one_attached :image
end
