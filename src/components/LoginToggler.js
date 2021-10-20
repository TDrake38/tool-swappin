import React, {useContext} from "react";
import LoginContext from "../LogInContext";

const loginTogglerStyle = {
    cursor: "pointer"
}

const LoginToggler = () => {

    const [ isLoggedIn, setLoggedIn ] = useContext(LoginContext);

    return (
        <div style = {loginTogglerStyle} onClick = {() => {setLoggedIn(loginMode === "notLogged"? "logged": "notLogged")}}>
            <span title = "switch login">
                {isLoggedIn === "notLogged" ? "logged": "notLogged"}
            </span>
        </div>
    );
}

export default LoginToggler;