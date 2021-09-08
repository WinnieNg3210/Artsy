class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.integer :seller_id, null: false
      t.string :title, null: false
      t.text :description, null: false
      t.decimal :price, null: false
      t.string :image_url, null: false

      t.timestamps
    end

    add_index :products, :seller_id
    add_index :products, :title
  end
end
