import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import LoginContext from "../LogInContext";


function LogOutButton () {

    const [, setLoggedIn] = useContext(LoginContext);

    const logOut = (e) => {
        e.preventDefault();
        setLoggedIn(false)
    }

    return (
        <Button variant="dark" onClick={logOut}>Log Out</Button>
    )
}

export default LogOutButton;