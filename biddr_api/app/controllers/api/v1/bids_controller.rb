class Api::V1::BidsController < Api::ApplicationController
    before_action :authenticate_user!, only:[:create]
    
    def create
        @auction=Auction.find params[:auction_id]
        bid=Bid.new params.require(:bid).permit(:offer);
        bid.auction=@auction
        bid.user=current_user
        if bid.save
            render json:bid
        else
            render(
                json: {errors: bid.errors},
                status: 422
            )
        end
    end

end
