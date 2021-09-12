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
# Review.destroy_all

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
user11 = User.create!(email: "smoothJSGamer@aa.com", first_name: "Julian", password: "No Sleep for 48hours")

# user12 = User.create!(email: "bulbasaur@pokemon.com", first_name: "Bulbasaur", password: "grassPoke")
# user13 = User.create!(email: "squirtle@pokemon.com", first_name: "Squirtle", password: "waterPoke")
# user14 = User.create!(email: "pikachu@pokemon.com", first_name: "Pikachu", password: "electricMouse")
# user15 = User.create!(email: "togepi@pokemon.com", first_name: "Togepi", password: "eggPokemon")
# user16 = User.create!(email: "chimchar@pokemon.com", first_name: "Chimchar", password: "firemonkey")
# user17 = User.create!(email: "snivy@pokemon.com", first_name: "Snivy", password: "SneakyMichevious")
# user18 = User.create!(email: "Tepig@pokemon.com", first_name: "Tepig", password: "firepig")
# user19 = User.create!(email: "chikorita@pokemon.com", first_name: "Chikorita", password: "theLeafPoke")
# user20 = User.create!(email: "Turtwig@pokemon.com", first_name: "Turtwig", password: "thefastestTurtle")
# user21 = User.create!(email: "Cyndaquil@pokemon.com", first_name: "Cyndaquil", password: "fireMouse")
# user22 = User.create!(email: "Ariel@littlemermaid.com", first_name: "Ariel", password: "theLittleMermaid")
# user23 = User.create!(email: "Mew@pokemon.com", first_name: "Mew", password: "pink_flying_creature")
# user24 = User.create!(email: "mewtwo@pokemon.com", first_name: "MewTwo", password: "humanoid_creature")
# user25 = User.create!(email: "Articuno@pokemon.com", first_name: "Articuno", password: "the flying icebird")
# user26 = User.create!(email: "charmander@pokemon.com", first_name: "Charmander", password: "firePoke")






product1 = Product.create!(title: "Long White Snowy Never Ending Road to Nirvana Endless Winter Road With Card Tracks", description: "High quality photograph by John Broks. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacus nisi, facilisis at aliquam nec, luctus sed arcu. Donec id tempus nisl, quis lacinia lectus. Proin ultrices lorem eget commodo eleifend. Integer ligula enim, pharetra in aliquet ut, vehicula at mi. Curabitur vehicula lectus ligula, eu pretium nunc blandit sed. Nulla ac eros in justo sollicitudin porttitor. Nulla facilisi. Praesent a interdum ex, sit amet interdum urna.

Nullam urna neque, placerat sit amet erat vitae, aliquet fermentum sem. Morbi tempus pulvinar neque id rhoncus. Duis iaculis ornare risus, quis cursus quam tincidunt vel. Sed eget nunc vitae tortor placerat dapibus in quis dolor. Donec dignissim est et nunc interdum semper. Sed dapibus velit sed erat bibendum eleifend. Duis convallis lorem neque, laoreet porttitor orci mattis nec. Vestibulum lobortis ligula id magna luctus pulvinar. Morbi blandit nec massa vitae condimentum. Suspendisse dictum ligula est, sed gravida nisi tincidunt a. Nulla dolor quam, ullamcorper lacinia sapien volutpat, lacinia maximus velit. Nam id hendrerit libero. Pellentesque venenatis vestibulum mauris eget fermentum." , price: 59.99, seller_id: user1.id)
# image1 = URI.open("https://active-storage-artsapp-dev.s3.amazonaws.com/p1.jpg")
# product1.image.attach(io: image1, filename:"p1.jpg")


product2 = Product.create!(title: "Woman Hurriedly Walking Past a Beautiful Collage of Drawn Faces Blurry Woman Walking Fast on the Street City Vibes Black and White", description: "High quality photograph by Masahiro Miyagi", price: 64.99, seller_id: user6.id )
# image2 = URI.open("https://active-storage-artsapp-dev.s3.amazonaws.com/p2.jpg")
# product1.image.attach(io: image2, filename:"p2.jpg")

product3 = Product.create!(title: "Pikachu In Street Clothes Electric Mouse Pokemon in Hoodie and Sneakers in a Green Scenery. Perfect Screen Photo For Pokemon Lover and Anyone Who Loves Cute Thing", description: "High quality photograph by Lia", price: 75.99, seller_id: user7.id )
# image3 = URI.open("https://active-storage-artsapp-dev.s3.amazonaws.com/p3.jpg")
# product3.image.attach(io: image3, filename:"p3.jpg")

product4 = Product.create!(title: "White Walls Overwhelming Around Someone", description: "High quality photograph by Nicola Fioravanti", price: 80.99, seller_id: user10.id )
# image4 = URI.open("https://active-storage-artsapp-dev.s3.amazonaws.com/p4.jpg")
# product4.image.attach(io: image4, filename:"p4.jpg")

product5 = Product.create!(title: "Mountain Lake Welcoming the Start of Spring After a Cold Winter Snowy Mountain Melting Away to the Cold Lake", description: "High quality photograph by Click and Learn Photography", price: 85.99, seller_id: user10.id)
# image5 = URI.open("https://active-storage-artsapp-dev.s3.amazonaws.com/p5.jpg")
# product5.image.attach(io: image5, filename:"p5.jpg")

product6 = Product.create!(title: "Black & White Photograph of a Bird Flying Through the Sky", description: "High quality photograph by Tamilazhagan", price: 90.99, seller_id: user6.id )
# image6 = URI.open("https://active-storage-artsapp-dev.s3.amazonaws.com/p6.jpg")
# product6.image.attach(io: image6, filename:"p6.jpg")

product7 = Product.create!(title: "Street Photography of Silhouette Man on the Phone Street Photography Manipulated to Black and White Through the Use of Silhouette", description: "High quality photograph by Warren Wong", price: 95.99, seller_id: user4.id)
# image7 = URI.open("https://active-storage-artsapp-dev.s3.amazonaws.com/p7.jpg")
# product7.image.attach(io: image6, filename:"p7.jpg")

product8 = Product.create!(title: "Field of Trees From Looking Above to the Dark Night Sky Filled with Bright Stars", description: "High quality photograph by Lia", price: 92.99, seller_id: user1.id)
# image8 = URI.open("https://active-storage-artsapp-dev.s3.amazonaws.com/p8.jpg")
# product8.image.attach(io: image6, filename:"p8.jpg")


# product9 = Product.create!(title: "Man on Riding on Yellow Bus At Night While Doing Work", description: "High quality photograph by ", price:, seller_id: )
# image9 = URI.open("https://active-storage-artsapp-dev.s3.amazonaws.com/p9.jpg")
# product9.image.attach(io: image9, filename:"p9.jpg")

# product10 = Product.create!(title: "Autumn Trees Big Nature Blue Sky Reflecting Over A Large Lake", description: "High quality photograph by ", price:, seller_id: )
# image10 = URI.open("https://active-storage-artsapp-dev.s3.amazonaws.com/p10.jpg")
# product10.image.attach(io: image10, filename:"p10.jpg")

# product11 = Product.create!(title: "Bare Tree Standing Alone In the Middle Of Nowhere Calm Serene Photo Of Tree In A Sea of Sand", description: "High quality photograph by ", price:, seller_id: )
# image11 = URI.open("https://active-storage-artsapp-dev.s3.amazonaws.com/p11.jpg")
# product11.image.attach(io: image11, filename:"p11.jpg")

# product12 = Product.create!(title: "Baby Yoda Sitting on a Mixed Tape Reaching Out In A Dark Background", description: "High quality photograph by ", price:, seller_id: )
# image12 = URI.open("https://active-storage-artsapp-dev.s3.amazonaws.com/p12.jpg")
# product12.image.attach(io: image12, filename:"p12.jpg")

# product13 = Product.create!(title: "Smooth Waterfall Rocks Filled With Green Moss Over A Beautiful Lake", description: "High quality photograph by ", price:, seller_id: )
# image13 = URI.open("https://active-storage-artsapp-dev.s3.amazonaws.com/p13.jpg")
# product13.image.attach(io: image13, filename:"p13.jpg")

# product14 = Product.create!(title: "Black and White Photograph Of Leaves Silhouette Shadow Glimmering In the Background", description: "High quality photograph by ", price:, seller_id: )
# image14 = URI.open("https://active-storage-artsapp-dev.s3.amazonaws.com/p14.jpg")
# product14.image.attach(io: image14, filename:"p14.jpg")

# product15 = Product.create!(title: "Bicycle Sitting Over A Cute Yellow Stone House With A Tree Over the House Spliting the Image In Half", description: "High quality photograph by ", price:, seller_id: )
# image15 = URI.open("https://active-storage-artsapp-dev.s3.amazonaws.com/p15.jpg")
# product15.image.attach(io: image15, filename:"p15.jpg")

# product16 = Product.create!(title: "Dragonair Sitting On A Plant Anime Model Photography Cartoon Photography", description: "High quality photograph by ", price:, seller_id: )
# image16 = URI.open("https://active-storage-artsapp-dev.s3.amazonaws.com/p16.jpg")
# product16.image.attach(io: image16, filename:"p16.jpg")

# product17 = Product.create!(title: "Autumn Leaves On Branch Persisting In the Oncoming Of Winter Shriveled Leaves On Somewhat Bare Branch", description: "High quality photograph by ", price:, seller_id: )
# image17 = URI.open("https://active-storage-artsapp-dev.s3.amazonaws.com/p17.jpg")
# product17.image.attach(io: image17, filename:"p17.jpg")

# product18 = Product.create!(title: "Beautiful Raindrop Dripping On Window Black and White Calming Photograph Of Raindrops Beauty In the Mudane Photography", description: "High quality photograph by ", price:, seller_id: )
# image18 = URI.open("https://active-storage-artsapp-dev.s3.amazonaws.com/p18.jpg")
# product18.image.attach(io: image18, filename:"p18.jpg")

# product19 = Product.create!(title: "", description: "High quality photograph by ", price:, seller_id: )
# image19 = URI.open("https://active-storage-artsapp-dev.s3.amazonaws.com/p19.jpg")
# product19.image.attach(io: image19, filename:"p19.jpg")

# product20 = Product.create!(title: "", description: "High quality photograph by ", price:, seller_id: )
# image20 = URI.open("https://active-storage-artsapp-dev.s3.amazonaws.com/p20.jpg")
# product20.image.attach(io: image20, filename:"p20.jpg")

# product21 = Product.create!(title: "", description: "High quality photograph by ", price:, seller_id: )
# image21 = URI.open("https://active-storage-artsapp-dev.s3.amazonaws.com/p21.jpg")
# product21.image.attach(io: image21, filename:"p21.jpg")

# product22 = Product.create!(title: "", description: "High quality photograph by ", price:, seller_id: )
# image22 = URI.open("https://active-storage-artsapp-dev.s3.amazonaws.com/p22.jpg")
# product22.image.attach(io: image22, filename:"p22.jpg")

# product23 = Product.create!(title: "", description: "High quality photograph by ", price:, seller_id: )
# image23 = URI.open("https://active-storage-artsapp-dev.s3.amazonaws.com/p23.jpg")
# product23.image.attach(io: image23, filename:"p23.jpg")

# product24 = Product.create!(title: "", description: "High quality photograph by ", price:, seller_id: )
# image24 = URI.open("https://active-storage-artsapp-dev.s3.amazonaws.com/p24.jpg")
# product24.image.attach(io: image24, filename:"p24.jpg")



# review1 = Review.create!()
# review2 = Review.create!()
# review3 = Review.create!()
# review4 = Review.create!()
# review5 = Review.create!()
# review6 = Review.create!()
# review7 = Review.create!()
# review8 = Review.create!()
# review9 = Review.create!()
# review10 = Review.create!()
# review11 = Review.create!()
# review12 = Review.create!()
# review13 = Review.create!()
# review14 = Review.create!()
# review15 = Review.create!()
# review16 = Review.create!()
# review17 = Review.create!()
# review18 = Review.create!()
# review19 = Review.create!()
# review20 = Review.create!()
# review21 = Review.create!()
# review22 = Review.create!()
# review23 = Review.create!()
# review24 = Review.create!()
# review25 = Review.create!()
# review26 = Review.create!()
# review27 = Review.create!()
# review28 = Review.create!()
# review29 = Review.create!()
# review30 = Review.create!()
# review31 = Review.create!()
# review32 = Review.create!()
# review33 = Review.create!()
# review34 = Review.create!()
# review35 = Review.create!()
# review36 = Review.create!()
# review37 = Review.create!()
# review38 = Review.create!()
# review39 = Review.create!()
# review40 = Review.create!()
# review41 = Review.create!()
# review42 = Review.create!()
# review43 = Review.create!()
# review44 = Review.create!()
# review45 = Review.create!()
# review46 = Review.create!()
# review47 = Review.create!()
# review48 = Review.create!()