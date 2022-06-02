import React, { useRef, useState, useEffect } from "react";
import drill from "../photos/drill.jpg"
import Sammy from "../photos/Sammy.jpg"
import { Button, Card, Form, InputGroup } from "react-bootstrap";
import './Messages.css'
import Rating from "./FakeRating";
import LoginContext from "../LogInContext";
import { useContextPersisted } from "./Hooks";
import { useParams } from "react-router-dom";

// const getUser = async (token, id) => {
//     const response = await fetch(`http://localhost:3001/users/${id}`, { headers: { Authorization: `Bearer ${token}` }, method: "GET" });
//     return await response.json();
// }

const getMessages = async (token, id) => {
    const response = await fetch(`http://localhost:3001/messages/${id}`, { headers: { Authorization: `Bearer ${token}` }, method: "GET" });
    return await response.json();
}

const sendMessage = async (token, message) => {
    const body = { message: message };
    const response = await fetch("http://localhost:3001/messages", {body: JSON.stringify(body), headers: { Authorization: `Bearer ${token}` }, method: "POST" });
    return await response.json();
}

function Messages() {
    const [token] = useContextPersisted(LoginContext, "token");
    const ref = useRef()
    const {id} = useParams()
    const [response, setResponse] = useState([])
    // const [trader, setTrader] = useState([])

    useEffect(() => {
        let mounted = true;

        const getMessagesAsync = async () => {
            const data = await getMessages(token, id);
            if (mounted) {
                setResponse(data);
            }
        };

        getMessagesAsync();

        // const getUserAsync = async () => {
        //     const data = await getUser(token, id);
        //     if (mounted) {
        //         setTrader(data);
        //     }
        // };

        // getUserAsync();

        return () => {
            mounted = false;
        };
    }, [token]);

    console.log(response)

    const send = async (e) => {
        e.preventDefault();
        await sendMessage ({ token, message: e.target.elements.message.value });
        ref.current.scrollTop = ref.current.scrollHeight;
        const { message } = await response.json()
        return message;
    }
    
    return (
        <>
            <div className="messages">
                <div>
                    <img src={drill} alt="tool" className="dp pict" />
                    <Card className="borrower">
                        <Card.Img variant="top" src={Sammy} alt="profile" />
                        <Card.Body>
                            <Card.Title>{/*trader.user_name*/}<Rating /></Card.Title>
                            <Card.Text>
                                St. John's and surrounding area.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="chat">
                    <div ref={ref} className="mess-box" >
                        {response.map(
                            (message) => (
                                <div key={message.sent}>
                                    <p>{message.message}</p>
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
                                        name="message"
                                        id="message"
                                    />
                                    <Button variant="secondary" type="submit">Send</Button>
                                </InputGroup>
                            </Form.Group>
                        </Form>
                    </div>
                </div>
                <Card className="borrower-2">
                    <Card.Body>
                        <Card.Title>{/*trader.user_name*/}</Card.Title>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default Messages;