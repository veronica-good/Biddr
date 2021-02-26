class Api::V1::AuctionsController < ApplicationController
    def index
        auctions=Auction.order created_at: :desc
        render json: auctions
    end
end
