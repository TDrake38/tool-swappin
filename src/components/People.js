import React, { useState, useEffect } from "react";
import { Card, ListGroup } from "react-bootstrap";
import Drake from '../photos/Drake.JPG'
import './People.css'
import PeepModal from "./UserModal";

const fetchData = async () => {
    const response = await fetch("http://localhost:3001/list");
    const json = await response.json();
    return json;
};

function People(){
    const [response, setResponse] = useState([]);

    useEffect(() => {
        let mounted = true;
    
        const fetchDataAsync = async () => {
          const data = await fetchData();
          if (mounted) {
            setResponse(data);
          }
        };
    
        fetchDataAsync();
    
        return () => {
          mounted = false;
        };
      }, []);
    
    console.log(response)

    return(
    <>
        <div>
            <div>
                <Card.Header className="title">Contacts</Card.Header>
                {response.map((person) =>
                <Card className="tard" key={person.id}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <img src={Drake} alt="profile" className="picture"/>
                            {person.user_name}
                            <PeepModal />
                        </ListGroup.Item>
                    </ListGroup>
                </Card>)}
            </div>
            <div>

            </div>
        </div>
    </>)
}

export default People;