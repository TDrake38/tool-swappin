import React from 'react';
import Login from "./components/LoginForm";
import Nav from "./components/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from "react-router-dom"


function App() {
  return (
    <>
        <Nav />
        <Login />
    </>
  )
}

export default App;
