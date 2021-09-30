class ChangeNullfalse < ActiveRecord::Migration[6.1]
  def change
    remove_column :cart_items, :user_id
    remove_column :cart_items, :product_id
  end
end
