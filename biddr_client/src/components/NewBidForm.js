import {Bid} from "../requests";

function NewBidForm(props){
    const {id} = props;
    const handleBidSubmit = event=>{
        // event.preventDefault();
        const fd= new FormData(event.currentTarget);
        const params = {
            offer: fd.get('offer')
        }
        createBid(id, params);
        event.currentTarget.reset();
    }

    function createBid(id, params){
        Bid.create(id, params).then((bid) => {
            console.log('Bid created', bid.id, id)
        });
    };

    return (
        <form onSubmit={event=>handleBidSubmit(event)}>
            <div>
                <label htmlFor='offer'>Your offer</label><br/>
                <input type="number" name="offer" id="offer"/>
            </div>
            <input type='submit' value='Bid'/>
        </form>
    )
}

export default NewBidForm;