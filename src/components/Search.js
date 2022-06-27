import React from "react";
import Listing from "./Listing";
import SearchBar from "./SearchBar";
import './Search.css'

function Search () {
    const [response, setResponse] = useState(0);

    return (
        <>
        <div className="search">
            <div className="bar">
                <SearchBar />
            </div>
        </div>
        <div className="listings">
            <Listing />
        </div>
        </>
    )
}

export default Search;