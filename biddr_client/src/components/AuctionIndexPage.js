import React, { Component } from 'react';
import {Auction} from '../requests';
import {Link} from 'react-router-dom';

class AuctionIndexPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            auctions: []
        }
    }

    componentDidMount(){
        Auction.index()
            .then(auctions=>{
                this.setState(state=>{
                    return {
                        auctions: auctions
                    }
                })
            })
    }

    render(){
        return(
            <main>
                {this.state.auctions.map(a =>{
                    return(
                        <div key={a.id}>
                            <Link to={`/auctions/${a.id}`}>
                                <h1>
                                    {a.title}
                                </h1>
                            </Link>
                                <p>posted on {new Date(a.created_at).toLocaleDateString()}</p>
                        </div>
                    )
                })}
            </main>
        )
    }
}
export default AuctionIndexPage;