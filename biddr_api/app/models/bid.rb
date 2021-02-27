class Bid < ApplicationRecord
    belongs_to :auction
    belongs_to :user
    validates :offer, numericality: { greater_than: 0 }, presence: true
end
