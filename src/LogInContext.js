import React from "react";

const LoginContext = React.createContext(localStorage.getItem('token'))

export default LoginContext;