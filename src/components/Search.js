import React from "react";
import { Link } from "react-router-dom";

function Search () {
    return (
        <div>
            <Link to='/'>Home</Link>
            <div>Search</div>
            <div><Link to='/login'>Login</Link></div>
            <div><Link to='/profile'>Profile</Link></div>
            <div><Link to='/messages'>Messages</Link></div>
        </div>
    )
}

export default Search;