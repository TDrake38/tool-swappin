import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Container } from "react-bootstrap";
import LoginContext from './LogInContext';
import Home from './components/Home';
import Profile from './components/Profile';
import Messages from './components/Messages';
import Search from './components/Search';
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom"
import NavBar from './components/NavBar';
import { UseAuth } from "./components/Login"

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  // const [authenticated, setAuthenticated] = useState("");

  return (
    <>
      <BrowserRouter>
        <LoginContext.Provider value={[loggedIn, setLoggedIn /*authenticated, setAuthenticated*/]}>
          <NavBar />
          <Container>
            <Switch>
              <Route path="/messages" exact component={Messages} />
              <Route path="/search" exact component={Search} />  
              <Route path="/" exact component={Home}/>
              <Route path="/profile">            
                {/*authenticated*/loggedIn ? <Profile /> : <Redirect to="/"/>}
              </Route>
              <Route render={() => <div>404</div>} />
            </Switch>
          </Container>
        </LoginContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App;
