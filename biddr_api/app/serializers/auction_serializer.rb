class AuctionSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :price, :reserve_price, :end_date, :created_at
  has_many :bids
  belongs_to :user
  class UserSerializer < ActiveModel::Serializer
    attributes :id, :name
  end
  class BidsSerializer < ActiveModel::Serializer
    attributes :id, :offer, :created_at
    belongs_to :user
  end 
end
