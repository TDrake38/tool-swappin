import React, { useState, useContext, useEffect } from "react";
//import './Profile.css';
import styles from "./Profile.module.css";
import { Card } from "react-bootstrap";
import People from "./People";
import Tool from "./ToolList";
import LoginContext from "../LogInContext";
import AddPic from "./ProfilePicture";


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
    
    //console.log(response.user_name)

    return (
        <>
            <div className={styles.profile}>
                <Card className={styles.hard}>
                    {/* make this responsive so that its not full size of the image. */}
                    <Card.Img variant="top" src={response.photo} alt="profile picture" />
                    <Card.Body>   
                        <div>{response.user_name}</div>
                        <div>{response.area ?? "No Location"}</div>
                    </Card.Body>
                    <AddPic />
                </Card>
                <Tool />
                <div className={styles.people}>
                    <People />
                </div>
            </div>
        </>
    )
}

export default Profile;