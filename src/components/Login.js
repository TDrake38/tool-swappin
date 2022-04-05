import req from "express/lib/request";
import { useState, useEffect} from "react";

const fetchData = async () => {
    const response = await fetch("http://localhost:3001/users");
    const json = await response.json();
    return json;
};

const login = ({ username, password }) => {
    fetch("/login", { username: req.body.username, password: req.body.password })
  }

function UseAuth (){
    const [authenticated, setAuthenticated] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        login.isAuthenticated().then(isAuthenticated => {
            setAuthenticated(isAuthenticated);
        });
    });

    useEffect(() => {
        if (authenticated) {
            login.getUser().then(setUser);
        } else {
            setUser(null);
        }
    }, [authenticated]);

    return [authenticated, user];
};

export default UseAuth;