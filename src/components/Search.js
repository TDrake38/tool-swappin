import React, { useState } from "react";
import Listing from "./Listing";
import SearchBar from "./SearchBar";
import "./Search.css";

function Search() {
  const [response, setResponse] = useState([]);

  return (
    <>
      <div className="search">
        <div className="bar">
          <SearchBar setResponse={setResponse} />
        </div>
      </div>
      <div className="listings">
        <Listing response={response} setResponse={setResponse}/>
      </div>
    </>
  );
}

export default Search;
