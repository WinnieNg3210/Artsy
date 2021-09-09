require 'open-uri'

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
user4 = User.create!(email: "hardcore_Gamer@hotmail.com", first_name: "Andrew", password: "gameIsLife555")
user5 = User.create!(email: "dairylover1995@gmail.com", first_name: "Winnie", password: "Dairylover")
user6 = User.create!(email: "drinkEnthusiast@aa.com", first_name: "Winnie", password: "loveMeMyRumandCoke")
user7 = User.create!(email: "spicygirl@aa.com", first_name: "Cindy", password: "onechipChallenge")
user8 = User.create!(email: "godOfLeagueCssReactEtc@aa.com", first_name: "Richard", password: "cssGod")
user9 = User.create!(email: "amazonGod699@aa.com", first_name: "Anthony", password: "anthill")
user10 = User.create!(email: "monkee@aa.com", first_name: "Alex", password: "iLoveMyProject")
user11 = User.create!(email: "charmander@pokemon.com", first_name: "Charmander", password: "firePoke")
user12 = User.create!(email: "bulbasaur@pokemon.com", first_name: "Bulbasaur", password: "grassPoke")
user13 = User.create!(email: "squirtle@pokemon.com", first_name: "Squirtle", password: "waterPoke")
user14 = User.create!(email: "pikachu@pokemon.com", first_name: "Pikachu", password: "electricMouse")
user15 = User.create!(email: "togepi@pokemon.com", first_name: "Togepi", password: "eggPokemon")
user16 = User.create!(email: "chimchar@pokemon.com", first_name: "Chimchar", password: "firemonkey")
user17 = User.create!(email: "snivy@pokemon.com", first_name: "Snivy", password: "SneakyMichevious")
user18 = User.create!(email: "Tepig@pokemon.com", first_name: "Tepig", password: "firepig")
user19 = User.create!(email: "chikorita@pokemon.com", first_name: "Chikorita", password: "theLeafPoke")
user20 = User.create!(email: "Turtwig@pokemon.com", first_name: "Turtwig", password: "thefastestTurtle")
user21 = User.create!(email: "Cyndaquil@pokemon.com", first_name: "Cyndaquil", password: "fireMouse")
user22 = User.create!(email: "Ariel@littlemermaid.com", first_name: "Ariel", password: "theLittleMermaid")
user23 = User.create!(email: "Mew@pokemon.com", first_name: "Mew", password: "pink_flying_creature")
user24 = User.create!(email: "mewtwo@pokemon.com", first_name: "MewTwo", password: "humanoid_creature")
user25 = User.create!(email: "Articuno@pokemon.com", first_name: "Articuno", password: "the flying icebird")

product1 = Product.create!(title: "Street Clothes Pikachu", description: "High quality photography by Lia. It features a Pikachu in street style clothings posing for a photo to show off his cute features but in an edgy style", price: 5000.00, seller_id: user1.id)

image1 = open("https://artsy-seed.s3.amazonaws.com/p1.jpg")


product2 = Product.create!(title: "Pikachu and the Summer Festival", description: "High quality photography by Brandon Skeli. It features Pikachu enjoying the summer with fireworks and icy snow cones to cool off.", price: 18.00, seller_id: user2.id)
product3 = Product.create!(title: "Pikachu and Squirtle's Exciting Adventure!", description: "High quality photography by Micheal Rivera. It features Pikachu and Squirtle setting off to a new and exciting adventure", price: 2600.00, seller_id: user1.id)
product4 = Product.create!(title: "Knitted Pikachu", description: "High quality craftsmanship by Guillermo Diaz of a beautiful knitted Pikachu waving at us.", price: "2300.00", seller_id: user1.id)
product5 = Product.create!(title: "The Bustling and Hustling of Times Square", description: "High quality photography by Andreas Kruck that shows off the exciting night time of a busy and bustling Times Square ", price: 18.00, seller_id: user2.id)
product6 = Product.create!(title: "Sunrise View of New York City High Up in the Sky", description: "High quality photography by Emiliano Bar that shows off the high views of New York City as the sun rises in the sky", price: 18.00, seller_id: user2.id)
product7 = Product.create!(title: "Night Time View of New York City High Up in the Sky", description: "High quality photography by Andrew Jephson that shows off the high views of New York City with the beautiful lights shining through the city. This is why the place is the city that never sleeps", price: 18.00, seller_id: user2.id)
product8 = Product.create!(title: "Gotta Catch Them All with Pokeball", description: "High quality craftsmanship of a Pokeball by Jay. A great item to have in your arsenal to aid in your mission and catch them all", price: 50.00, seller_id: user2.id )
product9 = Product.create!(title: "Joteon Winking from the Grass", description: "High quality photography by Jerry Johandy featuring a Jolteon winking at us as it tries to hide itself in the sea of green grasses", price: 125.93, seller_id: user5.id)
product10 = Product.create!(title: "Hello Dragonair, Where Did You Come From", description: "High quality photography by Thomas Evans featuring a dragonair poping out of a plant", price: 25.00, seller_id: user5.id)
product11 = Product.create!(title: "Dark Ambiance with a Boy Looking On through Gates", description: "High quality and enchanting photography by Nicholas Kwok manipulates the shadows to create an authentic black and white photograph", price: 2525.25, seller_id: user10.id)
product12 = Product.create!(title: "Boy Feeding Pigeons in the Street", description: "Heart-warm photograph of a boy feeding the pigeons. ", price: 500.50, seller_id: user5.id)
product13 = Product.create!(title: "Black & White Photograph: Waoman Walking Quickly on the Street", description: "High quality black and white photography by Masahiro Miyagi of a woman quickly walking to get through her day", price:, seller_id: )
# product14 = Product.create!(title: "", description: "", price:, seller_id: )
# product15 = Product.create!(title: "", description: "", price:, seller_id: )
# product16 = Product.create!(title: "", description: "", price:, seller_id: )
# product17 = Product.create!(title: "", description: "", price:, seller_id: )
# product18 = Product.create!(title: "", description: "", price:, seller_id: )
# product19 = Product.create!(title: "", description: "", price:, seller_id: )
# product20 = Product.create!(title: "", description: "", price:, seller_id: )