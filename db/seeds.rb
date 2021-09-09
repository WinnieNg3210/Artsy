# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Product.destroy_all

demoUser = User.create!(email: "beOurGuest@gmail.com", first_name: "Demo", password: "guestDemo")
user1 = User.create!(email: "theyellowbear@honey.com", first_name:"Pooh", password: "WinnieThePooh")
user2 = User.create!(email: "artistry3210@gmail.com", first_name: "Aki", password: "the_artistic_cosplayer")
user3 = User.create!(email: "theTipsyArtist@alcohol.com", first_name: "Haruka", password: "SailorPower")

product1 = Product.create!(title: "The Runny Egg", description: "the golden egg", price: "5000.00", seller_id: user1.id)
product2 = Product.create!(title: "Glow-in-the-dark: Pikachu Terrarium", description: "Handmade terrarium that glows beautifully in the dark", price: "18.00", seller_id: user2.id)
product3 = Product.create!(title: "Sterling Silver Diamond Encrusted Ring", description: "Handcrafted ring with diamonds that have been carefully curated and encrusted by professional artisan", price: "2600.00", seller_id: user1.id)
product4 = Product.create!(title: "Wood Beaded Bracelet", description: "Beaded jewelry that is crafted from a 5 year old aged Emperor Maple wood imported straight from Japan", price: "2300.00", seller_id: user1.id)
product5 = Product.create!(title: "Glow-in-the-dark: Bulbasaur Terrarium", description: "Handmade terrarium that glows beautifully in the dark", price: "18.00", seller_id: user2.id)
product6 = Product.create!(title: "Glow-in-the-dark: Charmander Terrarium", description: "Handmade terrarium that glows beautifully in the dark", price: "18.00", seller_id: user2.id)
product7 = Product.create!(title: "Glow-in-the-dark: Squirtle Terrarium", description: "Handmade terrarium that glows beautifully in the dark", price: "18.00", seller_id: user2.id)
