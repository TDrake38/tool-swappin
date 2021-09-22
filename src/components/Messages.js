import React from "react";
import { Link } from "react-router-dom";

function Messages () {
    return(
        <div>
            <div><Link to='/'>Home</Link></div>
            <div><Link to='/search'>Search</Link></div>
            <div><Link to='/login'>Login</Link></div>
            <div><Link to='/profile'>Profile</Link></div>
            <div>Messages</div>
        </div>
    )
}

export default Messages;