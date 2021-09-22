import React from 'react';
import Login from "./components/LoginForm";
import Nav from "./components/NavBar"
import Home from './components/Home';
import Profile from './components/Profile';
import Messages from './components/Messages';
import Search from './components/Search';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, BrowserRouter } from "react-router-dom"


function App() {
  return (
    <>
    <Nav />
      <BrowserRouter>
          <Route path='/' exact component={Home}/>
          <Route path='/login' exact component={Login}/>
          <Route path='/profile' exact component={Profile}/>
          <Route path='/messages' exact component={Messages}/>
          <Route path='/Search' exact component={Search}/>
      </BrowserRouter>
    </>
  )
}

export default App;
