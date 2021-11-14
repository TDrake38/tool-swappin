import React from "react";
import { Card, CloseButton, ListGroup } from "react-bootstrap";
import drill from '../photos/drill.jpg'
import './Profile.css';
import AddTool from "./AddTool";

const tools = [
    'Tool 1',
    'Tool 2',
    'Tool 3',
];


function Tool(){

    const delet = (e) => {
        e.preventDefault();
        console.log("Tool Deleted")
    }

    return(
    <>
        <div>
            <div>
                <Card.Header className="tool-title">Tool List</Card.Header>
                {tools.map((tools, index) =>
                <Card className="a" key={index}>
                    <ListGroup variant="flush" className="list-group-flush tool-list">
                        <ListGroup.Item>
                            <img src={drill} alt="profile" className="picture"/>
                            <Card.Link>{tools}</Card.Link>
                            <CloseButton onClick={delet}/>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>)}
                <AddTool />
            </div>
        </div>
    </>)
}

export default Tool;