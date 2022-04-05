import { useState, useEffect} from "react";

const fetchData = async () => {
    const response = await fetch("http://localhost:3001/users");
    const json = await response.json();
    return json;
};

const login = async (username, password) => {
    const response = await fetch("http://localhost:3001/login",{ username: username, password: password } );
    const json = await response.json();
    console.log(response);
    return json;
}

function useLogin (){
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

    console.log(authenticated, user);
    return [authenticated, user];
    
};

export default useLogin;