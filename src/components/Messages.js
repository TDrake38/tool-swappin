import React, {useRef, useState} from "react";
import drill from "../photos/drill.jpg"
import Sammy from "../photos/Sammy.jpg"
import { Button, Card, Form, InputGroup} from "react-bootstrap";
import './Messages.css'
import Rating from "./FakeRating";


function Messages () {

    const ref = useRef()
    const [messages, setMessages] = useState([])
    const [person, setPerson] = useState()
    
    const send = (e) => {
        e.preventDefault();
        const [input] = e.target.elements;
        setMessages([...messages, input.value]);
        ref.current.scrollTop = ref.current.scrollHeight;
    }

    return(
        <>
            <div  className="messages">
                <div>
                    <img src={drill} alt="tool" className="dp pict"/>
                    <Card className="borrower">
                        <Card.Img variant="top" src={Sammy} alt="profile" />
                        <Card.Body>
                            <Card.Title>J. Smith <Rating /></Card.Title>
                            <Card.Text>
                                St. John's and surrounding area.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="chat">
                    <div ref={ref} className="mess-box" >
                    {messages.map(
                            (message, index) => (
                                <div key={index}>
                                    <p>{message}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className="mess-text">
                        <Form onSubmit={send}>
                            <Form.Group className="mb-3">
                                <InputGroup>
                                    <Form.Control
                                    type="text"
                                    placeholder="Message"
                                    />
                                    <Button variant="secondary" type="submit">Send</Button>
                                </InputGroup>
                            </Form.Group>
                        </Form>
                    </div>
                </div>
                <Card className="borrower-2">
                        <Card.Body>
                            <Card.Title>J. Smith</Card.Title>
                        </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default Messages;