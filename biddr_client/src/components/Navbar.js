import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = (props)=>{
    function handleSignOut(){
        props.destroySession()
    }
    return(
        <nav>
            <NavLink to="/">Welcome</NavLink>
            |
            <NavLink to='/auctions'>Auctions</NavLink>
            |
            <NavLink to='/auctions/new'>New Auction</NavLink>
            |
            {
                props.currentUser ? 
                (
                <div>
                    <span>{props.currentUser.name}</span> 
                    |
                    <button onClick={handleSignOut}>Sign Out</button>
                </div>
                )
                :
                <NavLink to='/sign_in'>Sign In</NavLink>
            }
            
        </nav>
    )
}
export default Navbar;