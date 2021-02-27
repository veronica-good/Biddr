const BidDetails = ({offer, created_at, id})=>{
    return(
        <div>
            <p>{offer} on {new Date(created_at).toLocaleString()}</p>
        </div>
    )
}
export default BidDetails;