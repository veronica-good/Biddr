# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Auction.delete_all
Bid.delete_all
User.delete_all

PASSWORD='supersecret'

super_user=User.create(
    name: 'Veronica',
    email:"vg@vg.com",
    password: PASSWORD,
)
10.times do 
User.create(
    name: Faker::Internet.username,
    email: Faker::Internet.email,
    password: PASSWORD
)
end
users=User.all

10.times do
    created_at=Faker::Date.backward(days: 30)
    a=Auction.create(
        title: Faker::Device.manufacturer,
        description: Faker::Hacker.say_something_smart,
        price: rand(1..1000),
        reserve_price: rand(1..1000),
        end_date: Faker::Date.forward(days: 30),
        created_at: created_at,
        updated_at: created_at,
        user: users.sample
    )

    if a.valid?
        a.bids = rand(2..11).times.map do
            created_at=Faker::Date.backward(days: 10)
            Bid.new(
                offer: rand(1..1000),
                created_at: created_at,
                updated_at: created_at,
                user: users.sample
            )
        end
    end
end

auction=Auction.all
bid=Bid.all

puts "Generated #{auction.count} auctions, #{bid.count} bids, users #{users.count}"