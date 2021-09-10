require "open-uri"

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
user7 = User.create!(email: "spicygirl@aa.com", first_name: "Cindyquil", password: "onechipChallenge")
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
user26 = User.create!(email: "smoothJSGamer@aa.com", first_name: "Julian", password: "No Sleep for 48hours")



# image1 = open("https://artsy-seed.s3.amazonaws.com/p1.jpg")
# product1.image.attach(io: image1, filename: 'p1.jpg')

product1 = Product.create!(title: "Long White Snowy Never Ending Road to Nirvana", description: "High quality photograph by John Broks." , price: 59.99, seller_id: user4.id)
product2 = Product.create!(title: "Woman Hurriedly Walking Past a Beautiful Collage of Drawn Faces Blurry Woman Walking Fast on the Street", description: "High quality photograph by Masahiro Miyagi", price: 64.99, seller_id: user6.id )

image2 = File.open(Rails.root.join("app/assets/images/p3b.jpg"))
product2.image.attach(io: image1, filename: "p3b.jpg")

product3 = Product.create!(title: "Pikachu In Street Clothes Electric Mouse Pokemon in Hoodie and Sneakers in a Green Scenery", description: "High quality photograph by Lia", price: 75.99, seller_id: user7.id )
product4 = Product.create!(title: "White Walls Overwhelming Around Someone", description: "High quality photograph by Nicola Fioravanti", price: 80.99, seller_id: user10.id )
product5 = Product.create!(title: "Mountain Lake Welcoming the Start of Spring After a Cold Winter Snowy Mountain Melting Away to the Cold Lake", description: "High quality photograph by Click and Learn Photography", price: 85.99, seller_id: user10.id)
product6 = Product.create!(title: "Black & White Photograph of a Bird Flying Through the Sky", description: "High quality photograph by Tamilazhagan", price: 90.99, seller_id: user6.id )
product7 = Product.create!(title: "Street Photography of Silhouette Man on the Phone Street Photography Manipulated to Black and White Through the Use of Silhouette", description: "High quality photograph by Warren Wong", price: 95.99, seller_id: user4.id)
product8 = Product.create!(title: "Field of Trees From Looking Above to the Dark Night Sky Filled with Bright Stars", description: "High quality photograph by Lia", price: 92.99, seller_id: user1.id)
# product9 = Product.create!(title: "", description: "High quality photograph by ", price:, seller_id: )
# product10 = Product.create!(title: "", description: "High quality photograph by ", price:, seller_id: )
# product11 = Product.create!(title: "", description: "High quality photograph by ", price:, seller_id: )
# product12 = Product.create!(title: "", description: "High quality photograph by ", price:, seller_id: )
# product13 = Product.create!(title: "", description: "High quality photograph by ", price:, seller_id: )
# product14 = Product.create!(title: "", description: "High quality photograph by ", price:, seller_id: )
# product15 = Product.create!(title: "", description: "High quality photograph by ", price:, seller_id: )
# product16 = Product.create!(title: "", description: "High quality photograph by ", price:, seller_id: )
# product17 = Product.create!(title: "", description: "High quality photograph by ", price:, seller_id: )
# product18 = Product.create!(title: "", description: "High quality photograph by ", price:, seller_id: )
# product19 = Product.create!(title: "", description: "High quality photograph by ", price:, seller_id: )
# product20 = Product.create!(title: "", description: "High quality photograph by ", price:, seller_id: )
# product21 = Product.create!(title: "", description: "High quality photograph by ", price:, seller_id: )
# product22 = Product.create!(title: "", description: "High quality photograph by ", price:, seller_id: )
# product23 = Product.create!(title: "", description: "High quality photograph by ", price:, seller_id: )
# product24 = Product.create!(title: "", description: "High quality photograph by ", price:, seller_id: )

