import { Component } from "react";
import AuctionNewForm from './AuctionNewForm';
import {Auction} from '../requests';

class AuctionNewPage extends Component{
    constructor(props){
        super(props);
        this.state={
            newAuctionData:{
                title: '',
                description: '',
                end_date: '',
                reserve_price: ''
            }
        }
        this.createAuction=this.createAuction.bind(this);
        this.updateAuctionData=this.updateAuctionData.bind(this);
    }

    createAuction(){
        Auction.create(this.state.newAuctionData)
            .then(({id})=>{
                this.props.history.push(`/auctions/${id}`)
            })
    }

    updateAuctionData(props){
        this.setState((state) => {
            return {
              newAuctionData: Object.assign(Object.assign({}, state.newAuctionData), props)
            }
          })
    }
    
    render(){
        return(
            <main>
                <AuctionNewForm 
                    createAuction={this.createAuction}
                    newAuctionData={this.state.newAuctionData}
                    updateAuctionData={this.updateAuctionData}
                />
            </main>
        )
    }
}
export default AuctionNewPage;