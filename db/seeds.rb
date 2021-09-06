# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# require 'dotenv/tasks'
# require 'rest-client'


# task mytask: :dotenv do
#     listings = RestClient.get('https://openapi.etsy.com/v3/application/shops/20916807/listings/active', headers : { x-api-key : ENV['API_KEY']})

#     listing_array = JSON.parse(listings)

#     listing_array.each do |product|
#         Product.create(
#             title: product["title"],
#             seller_id: product["user_id"],
#             description: product["description"],
#             price: product["price"]["amount"] / product["price"]["divisor"]
#         )
#     end    
# end