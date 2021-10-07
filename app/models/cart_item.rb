class CartItem < ApplicationRecord
    validates :product_id, :user_id, :quantity, presence: true

    belongs_to :buyer,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :product,
        foreign_key: :product_id,
        class_name: :Product

    # has_one :image,
    #     through: :product,
    #     source: :image
end