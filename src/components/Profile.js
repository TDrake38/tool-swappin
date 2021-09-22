import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

function Profile () {
    return (
        <div>
            <div><Link to='/'>Home</Link></div>
            <div><Link to='/search'>Search</Link></div>
            <div><Link to='/login'>Login</Link></div>
            <div>Profile</div>
            <div><Link to='/messages'>Messages</Link></div>
        </div>
    )
}

export default Profile;