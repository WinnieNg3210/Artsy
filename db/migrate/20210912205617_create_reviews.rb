class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.integer :author_id, null: false 
      t.integer :product_id, null: false
      t.text :content, null: false 
      t.integer :rating, null: false
      t.timestamps
    end

    add_index :reviews, :author_id
    add_index :reviews, :product_id
  end
end
