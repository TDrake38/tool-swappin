import React, { useState, useEffect } from "react";
import { FormControl, InputGroup, Button, Form} from "react-bootstrap";
import './SearchBar.css'

const searchForTools = async (searchBar) => {
    const body = { searchBar: searchBar };
    const response = await fetch(`http://localhost:3001/search`, {
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    });
    return await response.json();
};

function SearchBar () {
    const [response, setResponse] = useState([]);

    useEffect(() => {
        let mounted = true;
    
        const getToolsAsync = async () => {
          const data = await searchForTools();
          if (mounted) {
            setResponse(data);
          }
        };
    
        getToolsAsync();
    
        return () => {
          mounted = false;
        };
      }, []);

      const search = (e) => {
        e.preventDefault();
        const searchTools = await searchForTools(e.target.elements.searchBar.value);
        setResponse([searchTools])
        console.log(searchTools)
    }

    return (
        <>
            <InputGroup className="mb-3 s-bar">
                <Form>
                    <Button variant="dark" onClick={search}>Search</Button>
                    <Form.Control
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    name="searchBar"
                    />
                </Form>
            </InputGroup>
        </>
    )
}

export default SearchBar;