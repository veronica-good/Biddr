class Auction < ApplicationRecord
    has_many :bids
    belongs_to :user
    validates :title, presence: true, uniqueness: true    
    # validates :price, numericality: { greater_than: 0 }
    validates :reserve_price, numericality: { greater_than: 0 }
    validates :description, presence: true    
end
