class ChangeUserTable < ActiveRecord::Migration[6.1]
  def change
    remove_index :users, :username
    remove_column :users, :username
    add_column :users, :first_name, :string
    add_index :users, :first_name
  end
end
