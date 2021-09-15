import React from 'react';
import Login from "./components/LoginForm";
import Test from "./components/Test";
import Nav from "./components/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom"


function App() {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div>
        <Login />
      </div>
      
    </div>
  )
}

export default App;
