import React, { useState, useEffect, useContext } from "react";
import { Card, ListGroup } from "react-bootstrap";
import Drake from '../photos/Drake.JPG'
import './People.css'
//import PeepModal from "./UserModal";
import LoginContext from "../LogInContext";

const fetchData = async (token) => {
    const response = await fetch("http://localhost:3001/users", { headers: { Authorization: `Bearer ${token}` }, method: "GET" });
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
                            <img src={Drake} alt="profile" className="picture"/>
                            {/*TODO: when the user is clicked make it bring you to messages that have that users id */}
                            <a href={`/messages/${person.id}`}>{person.user_name}</a>
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