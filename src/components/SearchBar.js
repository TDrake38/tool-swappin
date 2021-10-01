import React from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import './SearchBar.css'

function SearchBar () {
    return (
        <>
            <InputGroup className="mb-3 s-bar">
                <InputGroup.Text id="inputGroup-sizing-default">Search</InputGroup.Text>
                <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>
        </>
    )
}

export default SearchBar;