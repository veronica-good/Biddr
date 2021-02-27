class Api::V1::BidsController < Api::ApplicationController
    before_action :authenticate_user!, except: [:index, :show]
    
    def create
        auction=Auction.find params[:auction_id]
        bid=Bid.new params.require(:bid).permit(:offer)
        bid.auction=@auction
        bid.user=current_user
        if bid.save
            render json: {id: bid.id}
        else
            render(
                json: {errors: bid.errors},
                status: 422
            )
        end
    end

end
