import BidDetails from './BidDetails';

const BidList = ({bids})=>{
    return(
        <>
            {bids? bids.map((b)=>{
                return <BidDetails
                    key={b.id}
                    offer={b.offer}
                    created_at={b.created_at}
                />
            }):''}
        </>
    )
}
export default BidList;