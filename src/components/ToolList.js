import React, { useContext, useEffect, useState } from "react";
import { Card, CloseButton, ListGroup } from "react-bootstrap";
import './Profile.css';
import AddTool from "./AddTool";
import LoginContext from "../LogInContext";
import { useParams } from "react-router-dom";

//TODO: make it so all the tools that are showing are the same size/look nice

const getTools = async (token) => {
    const response = await fetch("http://localhost:3001/getTools", { headers: { Authorization: `Bearer ${token}` }, method: "GET" });
    return await response.json();
}

const deleteTool = async (token, id ) => {
    const body = { id: id };
    const response = await fetch(`http://localhost:3001/deleteTool/${id}`, {
      body: JSON.stringify(body),
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      method: "DELETE",
    });
    return await response.json();
  };

function Tool() {
    const [token] = useContext(LoginContext);
    const [response, setResponse] = useState([]);
    // const [deletTool, setDeleletTool] = useState([])
    const { id } = useParams();

    useEffect(() => {
        let mounted = true;
    
        const getToolsAsync = async () => {
          const data = await getTools(token);
          if (mounted) {
            setResponse(data);
          }
        };

        getToolsAsync();

        // const deleteToolAsync = async () => {
        //     const data = await deleteTool(token, id);
        //     if (mounted) {
        //         setDeleletTool(data);
        //     }
        // }

        // deleteToolAsync();

        return () => {
          mounted = false;
        };
      }, [token]);
    
    console.log(response)

    
    const delet = (e) => {
        e.preventDefault();
        const toolDelete = deleteTool(id);
        // setDeleletTool([toolDelete])
        console.log(toolDelete)
    }

    return (
        <>
            <div>
                <div>
                    <Card.Header className="tool-title">Tool List</Card.Header>
                    {response.map((tool) =>
                        <Card className="a" key={tool.owner_id}>
                            <ListGroup variant="flush" className="list-group-flush tool-list">
                                <ListGroup.Item>
                                    <img src={tool.photo} alt="profile" className="picture" />
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