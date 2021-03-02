import AuctionDetails from './AuctionDetails';
import {Auction} from '../requests';
import { Component } from 'react';
import BidsList from './BidsList';
import NewBidForm from './NewBidForm';

class AuctionShowPage extends Component{

    constructor(props){
        super(props);
        this.state = {
            auction: {}
        }
    }    

    componentDidMount(){
        Auction.show(this.props.match.params.id)
            .then(auction=>{
                this.setState(state=>{
                    return {
                        auction : auction
                    }
                })
            })
    }

    render(){
        const {id, title, description, price, reserve_price, end_date, bids}=this.state.auction;
        return(
            <main>
                <AuctionDetails 
                    title={title}
                    description={description}
                    price={price}
                    reserve_price={reserve_price}
                    end_date={new Date(end_date).toLocaleDateString()}
                />
                <h4>Bids</h4>
                <NewBidForm
                    id={id} 
                />
                <h3>Previous bids</h3>
                <BidsList 
                    bids={bids}
                />
            </main>
        )
    }
}

export default AuctionShowPage;