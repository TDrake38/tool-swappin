import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Container } from "react-bootstrap";
import LoginContext from './LogInContext';
import Home from './components/Home';
import Profile from './components/Profile';
import Messages from './components/Messages';
import Search from './components/Search';
import { Route, BrowserRouter, Switch } from "react-router-dom"
import NavBar from './components/NavBar';

function App() {
  const login = useState(false);

  return (
    <>
      <BrowserRouter>
        <LoginContext.Provider value={login}>
          <NavBar />
          <Container>
            <Switch>
              <Route path="/profile" exact component={Profile} />
              <Route path="/messages" exact component={Messages} />
              <Route path="/search" exact component={Search} />              
              <Route path="/" exact component={Home} />
              <Route render={() => <div>404</div>} />
            </Switch>
          </Container>
        </LoginContext.Provider>
      </BrowserRouter>
    </>
  )
}

//<Route path="/" render={() => <div> 404 </div>} />

export default App;
