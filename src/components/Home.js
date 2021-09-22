import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import { Nav } from "react-bootstrap";

function Home () {
    return(
        <div>
            <div>Home</div>
            <div><Link to='/search'>Search</Link></div>
            <div><Link to='/login'>Login</Link></div>
            <div><Link to='/profile'>Profile</Link></div>
            <div><Link to='/messages'>Messages</Link></div>
        </div>
    )
}

export default Home;