import { useState, useEffect} from "react";

const fetchData = async () => {
    const response = await fetch("http://localhost:3001/users");
    const json = await response.json();
    return json;
};

function useLogin (){
    const [authenticated, setAuthenticated] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetchData.isAuthenticated().then(isAuthenticated => {
            setAuthenticated(isAuthenticated);
        });
    });

    useEffect(() => {
        if (authenticated) {
            fetchData.getUser().then(setUser);
        } else {
            setUser(null);
        }
    }, [authenticated]);

    console.log(authenticated, user);
    return [authenticated, user];
    
};

export default useLogin;