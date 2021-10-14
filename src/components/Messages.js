import React from "react";
import Drake from '../photos/Drake.JPG'
import { InputGroup, FormControl, Button } from "react-bootstrap";
import './Messages.css'



function Messages () {

    const send = (e) => {
        e.preventDefault();
        console.log("Message sent.");
    }

    return(
        <>
            <div  className="messages">
                <img src={Drake} alt="profile" className="dp pict"/>
                <div className="chat">
                    <div className="mess-box" >
                        {/*This image is only to test the scroll*/}
                        <img src={Drake} alt="profile" className="test"/>
                    </div>
                    <div className="mess-text">
                        <InputGroup className="mb-3">
                            <FormControl
                            placeholder="Message"
                            aria-label="Message"
                            aria-describedby="basic-addon2"
                            />
                            <Button variant="secondary" onClick={send}>Send</Button>
                        </InputGroup>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Messages;