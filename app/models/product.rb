class Product < ApplicationRecord
    validates :title, :description, :price, :seller_id
end