class ChangestoCartItemColumns < ActiveRecord::Migration[6.1]
  def change
    remove_column :cart_items, :product_id
    remove_column :cart_items, :user_id
    add_column :cart_items, :product_id, :integer
    add_column :cart_items, :user_id, :integer
    add_index :cart_items, [:product_id, :user_id], unique: true
  end
end
