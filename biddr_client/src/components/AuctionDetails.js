const AuctionDetails = props =>{
    const {id, title, description, price, reserve_price, end_date, created_at}=props;
    return(
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>Current price:${price}</p>
            <p>Ends at: {end_date}</p>
            <p>reserve price: {reserve_price}</p>
        </div>
    )
};

export default AuctionDetails;