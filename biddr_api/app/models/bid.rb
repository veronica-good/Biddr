class Bid < ApplicationRecord
    belongs_to :auction
    validates :offer, numericality: { greater_than: 0 }
end
