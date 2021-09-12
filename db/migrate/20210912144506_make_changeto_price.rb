class MakeChangetoPrice < ActiveRecord::Migration[6.1]
  def change
    remove_column :products, :price 
    add_column :products, :price, :decimal, :precision => 10, :scale => 2 
  end
end
