import React from "react";
import Listing from "./Listing";
import SearchBar from "./SearchBar";
import './Search.css'

function Search () {
    return (
        <>
        <div className="search">
            <div className="bar">
                <SearchBar />
            </div>
            <Listing />
        </div>
        </>
    )
}

export default Search;