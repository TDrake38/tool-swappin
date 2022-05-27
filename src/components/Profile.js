import React, { useState, useContext, useEffect } from "react";
import './Profile.css';
import NameInput from "./InputName";
import AreaInput from "./InputArea";
import SaveButton from "./SaveButton";
import { Card } from "react-bootstrap";
import Drake from "../photos/Drake.JPG";
import People from "./People";
import Rating from "./FakeRating";
import Tool from "./ToolList";
import LoginContext from "../LogInContext";

const getUser = async (token) => {
    const response = await fetch("http://localhost:3001/currentUser", { headers: { Authorization: `Bearer ${token}` }, method: "GET" });
    return await response.json();
}


function Profile() {
    const [token] = useContext(LoginContext);
    const [response, setResponse] = useState([]);

    useEffect(() => {
        let mounted = true;
    
        const getUserAsync = async () => {
          const data = await getUser(token);
          if (mounted) {
            setResponse(data);
          }
        };

        getUserAsync();

        return () => {
          mounted = false;
        };
      }, [token]);
    
    console.log(response)

    return (
        <>
            <div className="profile">
                <Card className="hard">
                    <Card.Img variant="top" src={Drake} alt="profile" />
                    <Card.Body>   
                        <div>{response.user_name}</div>
                        <div>{response.area ?? "No Location"}</div>
                        <Rating />
                    </Card.Body>
                </Card>
                <Tool />
                <div className="people">
                    <People />
                </div>
            </div>
        </>
    )
}

export default Profile;