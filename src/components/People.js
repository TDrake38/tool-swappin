import React, { useState, useEffect, useContext } from "react";
import { Card, ListGroup } from "react-bootstrap";
import Drake from '../photos/Drake.JPG'
import './People.css'
import LoginContext from "../LogInContext";

const fetchData = async (token) => {
    /* TODO: have this filter for everyone you have messages with only. */
    const response = await fetch("http://localhost:3001/contacts", { headers: { Authorization: `Bearer ${token}` }, method: "GET" /* also GET is the default method and does not need to be here */ });
    return await response.json();
};

function People(){
    const [token] = useContext(LoginContext);
    const [response, setResponse] = useState([]);

    useEffect(() => {
        let mounted = true;
    
        const fetchDataAsync = async () => {
          const data = await fetchData(token);
          if (mounted) {
            setResponse(data);
          }
        };
    
        fetchDataAsync();
    
        return () => {
          mounted = false;
        };
      }, [token]);

    return(
    <>
        <div>
            <div>
                <Card.Header className="title">Contacts</Card.Header>
                {response.map((person) =>
                <Card className="card" key={person.id}>
                    {console.log(person)}
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <Card.Img variant="top" src={person.photo} alt="contacts profile picture" className="picture"/>
                            <a href={`/messages/${person.id}`}>{person.user_name}</a>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>)}
            </div>
        </div>
    </>)
}

export default People;