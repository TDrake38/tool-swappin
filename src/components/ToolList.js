import React, { useContext, useEffect, useState } from "react";
import { Card, CloseButton, ListGroup } from "react-bootstrap";
import drill from '../photos/drill.jpg'
import './Profile.css';
import AddTool from "./AddTool";
import LoginContext from "../LogInContext";

const getTools = async (token) => {
    const response = await fetch("http://localhost:3001/findTool", { headers: { Authorization: `Bearer ${token}` }, method: "GET" });
    return await response.json();
}

function Tool() {
    const [token] = useContext(LoginContext);
    const [response, setResponse] = useState([]);

    useEffect(() => {
        let mounted = true;
    
        const getToolsAsync = async () => {
          const data = await getTools(token);
          if (mounted) {
            setResponse(data);
          }
        };

        getToolsAsync();

        return () => {
          mounted = false;
        };
      }, [token]);
    
    console.log(response)

    // useEffect(() => {
    //     (async () => {
    //         console.log(await getTools(token));
    //     })()
    // }, [token])
    
    const delet = (e) => {
        e.preventDefault();
        console.log("Tool Deleted")
    }

    return (
        <>
            <div>
                <div>
                    <Card.Header className="tool-title">Tool List</Card.Header>
                    {response.map((tool, index) =>
                        <Card className="a" key={index}>
                            <ListGroup variant="flush" className="list-group-flush tool-list">
                                <ListGroup.Item>
                                    <img src={drill} alt="profile" className="picture" />
                                    <Card.Link>{tool.name}</Card.Link>
                                    <CloseButton onClick={delet} />
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>)}
                    <AddTool />
                </div>
            </div>
        </>)
}

export default Tool;