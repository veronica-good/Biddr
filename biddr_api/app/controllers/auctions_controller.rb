class AuctionsController < ApplicationController
    before_action :find_auction, only:[:show, :edit, :update, :destroy]
    # before_action :authenticate_user!, except: [:index, :show]

    def show
        @bid=Bid.new
        @bids=@auction.bids.order(created_at: :desc)
    end

    private
    def find_auction
        @auction=Auction.find params[:id] 
    end
    def auction_params
        params.require(:auction).permit(:title, :body, :tag_names)
    # permit specifies all the input names that are allowes as symbol
    end
end
