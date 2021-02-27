
const AuctionNewForm = ({createAuction, newAuctionData, updateAuctionData}) =>{

    const handleSubmit=event=>{
        event.preventDefault();
        createAuction();
    }

    function handleAuctionInput(event) {
        const value = event.currentTarget.value;
        const name = event.currentTarget.name;
        updateAuctionData({[name]: value})
      }

    return(
        <div>
            <h1>CREATE AN AUCTION</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='title'>Title: </label><br/>
                    <br/>
                    <input 
                    name='title' 
                    id='title' 
                    value={newAuctionData.title} 
                    onChange={handleAuctionInput}/>
                </div>
                <div>
                    <label htmlFor='description'>Description: </label>
                    <br/>
                    <br/>
                    <textarea 
                    name='description' 
                    id='description' 
                    value={newAuctionData.description} 
                    onChange={handleAuctionInput}/>
                </div>
                <div>
                    <label htmlFor='end_date'>End date: </label>
                    <br/>
                    <br/>
                    <input 
                    type='date' 
                    name='end_date' 
                    id='end_date' 
                    value={newAuctionData.end_date} 
                    onChange={handleAuctionInput}/>
                </div>
                <div>
                    <label htmlFor='reserve_price'>Reserve Price: </label>
                    <br/>
                    <br/>
                    <input 
                    type='number' 
                    name='reserve_price' 
                    id='reserve_price' 
                    value={newAuctionData.reserve_price} 
                    onChange={handleAuctionInput}/>
                </div>
                <input type='submit' value='Submit'/>
            </form>
        </div>
    )
}

export default AuctionNewForm;