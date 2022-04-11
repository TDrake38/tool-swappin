import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import LoginContext from "../LogInContext";
import { useHistory } from "react-router";

function LogOutButton () {
    const history = useHistory();
    const [, setLoggedIn] = useContext(LoginContext);

    const logOut = (e) => {
        e.preventDefault();
        window.localStorage.removeItem("token");
        setLoggedIn(false)
        alert('Logged out!')
        history.push("/")
    }
    return (
        <Button variant="dark" onClick={logOut}>Log Out</Button>
    )
}

export default LogOutButton;