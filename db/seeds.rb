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
Review.destroy_all

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






product1 = Product.create!(title: "Long White Snowy Never Ending Road to Nirvana Endless Winter Road With Car Tracks", description: "High quality photograph by John Broks. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacus nisi, facilisis at aliquam nec, luctus sed arcu. Donec id tempus nisl, quis lacinia lectus. Proin ultrices lorem eget commodo eleifend. Integer ligula enim, pharetra in aliquet ut, vehicula at mi. Curabitur vehicula lectus ligula, eu pretium nunc blandit sed. Nulla ac eros in justo sollicitudin porttitor. Nulla facilisi. Praesent a interdum ex, sit amet interdum urna.

Nullam urna neque, placerat sit amet erat vitae, aliquet fermentum sem. Morbi tempus pulvinar neque id rhoncus. Duis iaculis ornare risus, quis cursus quam tincidunt vel. Sed eget nunc vitae tortor placerat dapibus in quis dolor. Donec dignissim est et nunc interdum semper. Sed dapibus velit sed erat bibendum eleifend. Duis convallis lorem neque, laoreet porttitor orci mattis nec. Vestibulum lobortis ligula id magna luctus pulvinar. Morbi blandit nec massa vitae condimentum. Suspendisse dictum ligula est, sed gravida nisi tincidunt a. Nulla dolor quam, ullamcorper lacinia sapien volutpat, lacinia maximus velit. Nam id hendrerit libero. Pellentesque venenatis vestibulum mauris eget fermentum." , price: 59.99, seller_id: user1.id)
image1 = URI.open("https://active-storage-artsapp-seeds.s3.amazonaws.com/p1.jpg")
product1.image.attach(io: image1, filename:"p1.jpg")


product2 = Product.create!(title: "Woman Hurriedly Walking Past a Beautiful Collage of Drawn Faces Blurry Woman Walking Fast on the Street City Vibes Black and White", description: "High quality photograph by Masahiro Miyagi", price: 64.99, seller_id: user6.id )
image2 = URI.open("https://active-storage-artsapp-seeds.s3.amazonaws.com/p2.jpg")
product2.image.attach(io: image2, filename:"p2.jpg")

product3 = Product.create!(title: "Pikachu In Street Clothes Electric Mouse Pokemon in Hoodie and Sneakers in a Green Scenery. Perfect Screen Photo For Pokemon Lover and Anyone Who Loves Cute Thing", description: "High quality photograph by Lia", price: 75.99, seller_id: user7.id )
image3 = URI.open("https://active-storage-artsapp-seeds.s3.amazonaws.com/p3.jpg")
product3.image.attach(io: image3, filename:"p3.jpg")

product4 = Product.create!(title: "White Walls Overwhelming Around Someone", description: "High quality photograph by Nicola Fioravanti", price: 80.99, seller_id: user10.id )
image4 = URI.open("https://active-storage-artsapp-seeds.s3.amazonaws.com/p4.jpg")
product4.image.attach(io: image4, filename:"p4.jpg")

product5 = Product.create!(title: "Mountain Lake Welcoming the Start of Spring After a Cold Winter Snowy Mountain Melting Away to the Cold Lake", description: "High quality photograph by Click and Learn Photography", price: 85.99, seller_id: user10.id)
image5 = URI.open("https://active-storage-artsapp-seeds.s3.amazonaws.com/p5.jpg")
product5.image.attach(io: image5, filename:"p5.jpg")

product6 = Product.create!(title: "Black & White Photograph of a Bird Flying Through the Sky", description: "High quality photograph by Tamilazhagan", price: 90.99, seller_id: user6.id )
image6 = URI.open("https://active-storage-artsapp-seeds.s3.amazonaws.com/p6.jpg")
product6.image.attach(io: image6, filename:"p6.jpg")

product7 = Product.create!(title: "Street Photography of Silhouette Man on the Phone Street Photography Manipulated to Black and White Through the Use of Silhouette", description: "High quality photograph by Warren Wong", price: 95.99, seller_id: user4.id)
image7 = URI.open("https://active-storage-artsapp-seeds.s3.amazonaws.com/p7.jpg")
product7.image.attach(io: image7, filename:"p7.jpg")

product8 = Product.create!(title: "Field of Trees From Looking Above to the Dark Night Sky Filled with Bright Stars", description: "High quality photograph by Lia", price: 92.99, seller_id: user1.id)
image8 = URI.open("https://active-storage-artsapp-seeds.s3.amazonaws.com/p8.jpg")
product8.image.attach(io: image8, filename:"p8.jpg")

product9 = Product.create!(title: "Man on Riding on Yellow Bus At Night While Doing Work Night Time Photography", description: "High quality photograph by ", price: 32.01, seller_id: user11.id )
image9 = URI.open("https://active-storage-artsapp-seeds.s3.amazonaws.com/p9.jpg")
product9.image.attach(io: image9, filename:"p9.jpg")

product10 = Product.create!(title: "Autumn Trees Big Nature Blue Sky Reflecting Over A Large Lake Calm Zen Nature", description: "High quality photograph by ", price: 50.24, seller_id: user7.id )
image10 = URI.open("https://active-storage-artsapp-seeds.s3.amazonaws.com/p10.jpg")
product10.image.attach(io: image10, filename:"p10.jpg")

product11 = Product.create!(title: "Bare Tree Standing Alone In the Middle Of Nowhere Calm Serene Photo Of Tree In A Sea of Sand", description: "High quality photograph by Mox Bohme", price: 92.58, seller_id: user10.id )
image11 = URI.open("https://active-storage-artsapp-seeds.s3.amazonaws.com/p11.jpg")
product11.image.attach(io: image11, filename:"p11.jpg")

# product12 = Product.create!(title: "Baby Yoda Sitting on a Mixed Tape Reaching Out In A Dark Background", description: "High quality photograph by Thomas Evans", price: 106.52, seller_id: user5.id )
# image12 = URI.open("https://active-storage-artsapp-seeds.s3.amazonaws.com/p12.jpg")
# product12.image.attach(io: image12, filename:"p12.jpg")

product13 = Product.create!(title: "Smooth Waterfall Rocks Filled With Green Moss Over A Beautiful Lake", description: "High quality photograph by Click and Learn Photography", price: 152.99, seller_id: user1.id )
image13 = URI.open("https://active-storage-artsapp-seeds.s3.amazonaws.com/p13.jpg")
product13.image.attach(io: image13, filename:"p13.jpg")

# product14 = Product.create!(title: "Black and White Photograph Of Leaves Silhouette Shadow Glimmering In the Background", description: "High quality photograph by Niranjan_Photographs", price: 58.92, seller_id: user5.id)
# image14 = URI.open("https://active-storage-artsapp-seeds.s3.amazonaws.com/p14.jpg")
# product14.image.attach(io: image14, filename:"p14.jpg")

product15 = Product.create!(title: "Bicycle Sitting Over A Cute Yellow Stone House With A Tree Over the House Spliting the Image In Half", description: "High quality photograph by Zeynep Sumer", price: 60.95, seller_id: user4.id)
image15 = URI.open("https://active-storage-artsapp-seeds.s3.amazonaws.com/p15.jpg")
product15.image.attach(io: image15, filename:"p15.jpg")

product16 = Product.create!(title: "Dragonair Sitting On A Plant Anime Model Photography Cartoon Photography", description: "High quality photograph by Thomas Evans", price: 62.84, seller_id: user3.id)
image16 = URI.open("https://active-storage-artsapp-seeds.s3.amazonaws.com/p16.jpg")
product16.image.attach(io: image16, filename:"p16.jpg")

product17 = Product.create!(title: "Autumn Leaves On Branch Persisting In the Oncoming Of Winter Shriveled Leaves On Somewhat Bare Branch", description: "High quality photograph by Thom Holmes", price: 125.99, seller_id: user3.id)
image17 = URI.open("https://active-storage-artsapp-seeds.s3.amazonaws.com/p17.jpg")
product17.image.attach(io: image17, filename:"p17.jpg")

product18 = Product.create!(title: "Beautiful Raindrop Dripping On Window Black and White Calming Photograph Of Raindrops Beauty In the Mudane Photography", description: "High quality photograph by Nikko Balanial", price: 599.99, seller_id: user1.id)
image18 = URI.open("https://active-storage-artsapp-seeds.s3.amazonaws.com/p18.jpg")
product18.image.attach(io: image18, filename:"p18.jpg")

# product19 = Product.create!(title: "Woman Standing By A White Staircase Sun Shining on Woman", description: "High quality photograph by Anna Sullivan", price: 59.99 , seller_id: user8.id )
# image19 = URI.open("https://active-storage-artsapp-seeds.s3.amazonaws.com/p19.jpg")
# product19.image.attach(io: image19, filename:"p19.jpg")

# product20 = Product.create!(title: "Black and White Photo of Surrounding Trees Gobbling Up Your Vision of the Sky Forest Tree Cover Nature Zen Calming", description: "High quality photograph by Thomas Evans", price: 52.98, seller_id: user10.id )
# image20 = URI.open("https://active-storage-artsapp-seeds.s3.amazonaws.com/p20.jpg")
# product20.image.attach(io: image20, filename:"p20.jpg")

product21 = Product.create!(title: "NYC Oculus White Architecture Scenic View From High Above Looking Over People Modern Photography", description: "High quality photograph by Micheal Chiara", price: 162.95, seller_id: user1.id )
image21 = URI.open("https://active-storage-artsapp-seeds.s3.amazonaws.com/p21.jpg")
product21.image.attach(io: image21, filename:"p21.jpg")

product22 = Product.create!(title: "Majestic Waterfall Scenic View Nature Photography", description: "High quality photograph by ederico Di Dio Photography", price: 250.67, seller_id: user2.id )
image22 = URI.open("https://active-storage-artsapp-seeds.s3.amazonaws.com/p22.jpg")
product22.image.attach(io: image22, filename:"p22.jpg")

# product23 = Product.create!(title: "Street Photography of Woman Walking Down A Set Of Stairs Black and White Shadows", description: "High quality photograph by Mitchell Luo", price: 62.95 , seller_id: user3.id)
# image23 = URI.open("https://active-storage-artsapp-seeds.s3.amazonaws.com/p23.jpg")
# product23.image.attach(io: image23, filename:"p23.jpg")

product24 = Product.create!(title: "Contrast Brick Building Old Building With Different Brick Color Street Photography", description: "High quality photograph by Julie Ricard", price: 42.95, seller_id: user4.id)
image24 = URI.open("https://active-storage-artsapp-seeds.s3.amazonaws.com/p24.jpg")
product24.image.attach(io: image24, filename:"p24.jpg")



review1 = Review.create!(content: "Beautiful, a nice touch to my living room", rating: 5 , author_id: demoUser.id, product_id: product1.id)
review2 = Review.create!(content: "Really gives me a nice busy living vibe. Shipping was fast. Arrived in two days!", rating: 5 , author_id: user2.id, product_id: product1.id)
review3 = Review.create!(content: "Very scenic", rating: 5 , author_id: user3.id, product_id: product2.id)
review4 = Review.create!(content: "It's beautiful", rating: 5 , author_id: user4.id, product_id: product2.id)
review5 = Review.create!(content: "Nice!", rating: 5 , author_id: user5.id, product_id: product3.id)
review6 = Review.create!(content: "Fast shipping", rating: 5 , author_id: user6.id, product_id: product3.id)
review7 = Review.create!(content: "Cute!", rating: 5 , author_id: user7.id, product_id: product4.id)
review8 = Review.create!(content: "So modern", rating: 5 , author_id: user8.id, product_id: product4.id)
review9 = Review.create!(content: "It arrived fast. Love the addition to my wall", rating: 5 , author_id: user9.id, product_id: product5.id)
review10 = Review.create!(content: "Beautiful scenic photograph. Loved it!", rating: 5 , author_id: user10.id, product_id: product5.id)
review11 = Review.create!(content: "Loved the similicity of this. Shipping was fast as well!", rating: 5 , author_id: user11.id, product_id: product6.id)
review12 = Review.create!(content: "Loved it", rating: 5 , author_id: user1.id, product_id: product6.id)
review13 = Review.create!(content: "Photograph is so clean and so smooth. The title definitely encompass the vibe", rating: 5 , author_id: user2.id, product_id: product7.id)
review14 = Review.create!(content: "Look at it everything. So beautiful", rating: 5 , author_id: user3.id, product_id: product7.id)
review15 = Review.create!(content: "photo look so calm and peaceful everytime i look at it. Really put a nice touch to my bedroom", rating: 5 , author_id: user4.id, product_id: product8.id)
review16 = Review.create!(content: "So beautiful!", rating: 5 , author_id: user5.id, product_id: product8.id)
review17 = Review.create!(content: "Can relate to the photo. Loved it!", rating: 5 , author_id: user6.id, product_id: product9.id)
review18 = Review.create!(content: "Love the colors", rating: 5 , author_id: user7.id, product_id: product9.id)
review19 = Review.create!(content: "So beautiful! Makes me want to go camping :)", rating: 5 , author_id: user8.id, product_id: product10.id)
review20 = Review.create!(content: "Definitely feel the autumn season through here", rating: 5 , author_id: user9.id, product_id: product10.id)
review21 = Review.create!(content: "So simplisitic and clean. A great addition to my minimalistic room", rating: 5 , author_id: user10.id, product_id: product11.id)
review22 = Review.create!(content: "Pretty!", rating: 5 , author_id: user11.id, product_id: product11.id)
# review23 = Review.create!(content: "So cute! Love it!", rating: 5 , author_id: user1.id, product_id: product12.id)
# review24 = Review.create!(content: "Love the play with cartoon", rating: 5 , author_id: user2.id, product_id: product12.id)
review25 = Review.create!(content: "This picture is so smooth. Makes me want to dive into it", rating: 5 , author_id: user3.id, product_id: product13.id)
review26 = Review.create!(content: "Shipping was fast. Great service", rating: 5 , author_id: user4.id, product_id: product13.id)
# review27 = Review.create!(content: "Nature in black and white. It's so pretty", rating: 5 , author_id: user5.id, product_id: product14.id)
# review28 = Review.create!(content: "gives me beauty in the mundane vibe. I love it", rating: 5 , author_id: user6.id, product_id: product14.id)
review29 = Review.create!(content: "This picture is so cute. I love the contrast in color along with the tree splitting between them!", rating: 5 , author_id: user7.id, product_id: product15.id)
review30 = Review.create!(content: "Love it!", rating: 5 , author_id: user8.id, product_id: product15.id)
review31 = Review.create!(content: "Pokemon!!!", rating: 5 , author_id: user9.id, product_id: product16.id)
review32 = Review.create!(content: "It's so cutttteeee!!!!!! Love it!", rating: 5 , author_id: user10.id, product_id: product16.id)
review33 = Review.create!(content: "Love this picture showing the resilience of the leaf in the coming winter", rating: 5 , author_id: user11.id, product_id: product17.id)
review34 = Review.create!(content: "Simplistic and beautiful", rating: 5 , author_id: user1.id, product_id: product17.id)
review35 = Review.create!(content: "Love the simple yet calming vibe coming from here.", rating: 5 , author_id: user2.id, product_id: product18.id)
review36 = Review.create!(content: "Beauty in the mundane. So calming", rating: 5 , author_id: user3.id, product_id: product18.id)
# review37 = Review.create!(content: "Cute photo", rating: 5 , author_id: user4.id, product_id: product19.id)
# review38 = Review.create!(content: "Nice", rating: 5 , author_id: user5.id, product_id: product19.id)
# review39 = Review.create!(content: "Loved it; so calming", rating: 5 , author_id: user6.id, product_id: product20.id)
# review40 = Review.create!(content: "it looks so nice in my living", rating: 5 , author_id: user7.id, product_id: product20.id)
review41 = Review.create!(content: "Simple and clean; great!", rating: 5 , author_id: user8.id, product_id: product21.id)
review42 = Review.create!(content: "Wow!!!!", rating: 5 , author_id: user9.id, product_id: product21.id)
review43 = Review.create!(content: "This is so beautiful. I feel like i'm actually in the photo", rating: 5 , author_id: user10.id, product_id: product22.id)
review44 = Review.create!(content: "Beautiful!", rating: 5 , author_id: user11.id, product_id: product22.id)
# review45 = Review.create!(content: "Street photography; love it!", rating: 5 , author_id: user1.id, product_id: product23.id)
# review46 = Review.create!(content: "Always love those small details with the shadows", rating: 5 , author_id: user2.id, product_id: product23.id)
review47 = Review.create!(content: "This is such a great photo and highlight colors so differently", rating: 5 , author_id: user3.id, product_id: product24.id)
review48 = Review.create!(content: "Love the photo!", rating: 5 , author_id: user4.id, product_id: product24.id)