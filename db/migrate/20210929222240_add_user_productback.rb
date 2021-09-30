class AddUserProductback < ActiveRecord::Migration[6.1]
  def change
    add_column :cart_items, :product_id, :integer
    add_column :cart_items, :user_id, :integer    
  end
end
