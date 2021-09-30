class AddCons < ActiveRecord::Migration[6.1]
  def change
    change_column_null(:cart_items, :user_id, false)
    change_column_null(:cart_items, :product_id, false)
  end
end
