import React from "react";
import login from "./components/LoginModal"
await login({ jwt_token })


const LoginContext = React.createContext(login)

export default LoginContext;