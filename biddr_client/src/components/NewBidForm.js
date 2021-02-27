
function NewBidForm(props){

    const handleBidSubmit = event=>{
        event.preventDefault();
        const fd= new FormData(event.currentTarget);
        console.log(props.auction)
        props.onSubmit(props.auction.id, {offer: fd.get('offer')})
        event.currentTarget.reset();
    }


    return (
        <form onSubmit={handleBidSubmit}>
            <div>
                <label htmlFor='offer'>Your offer</label><br/>
                <input type="number" name="offer" id="offer"/>
            </div>
            <input type='submit' value='Bid'/>
        </form>
    )
}

export default NewBidForm;