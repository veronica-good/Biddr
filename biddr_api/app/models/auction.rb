class Auction < ApplicationRecord
    has_many :bids

    validates :title, presence: true, uniqueness: true    
    validates :price, numericality: { greater_than: 0 }
    validates :reserve_price, numericality: { greater_than: 0 }
    validates :description, presence: true, length: { minimum: 10 }

    
end
