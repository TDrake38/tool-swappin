import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container } from "react-bootstrap";
import Home from './components/Home';
import Profile from './components/Profile';
import Messages from './components/Messages';
import Search from './components/Search';
import { Route, BrowserRouter, Switch } from "react-router-dom"
import NavBar from './components/NavBar';



function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Container>
        <Switch>
          <Route path="/profile" exact component={Profile}/>
          <Route path="/messages" exact component={Messages}/>
          <Route path="/search" exact component={Search}/>
          <Route path="/" exact component={Home}/>
          <Route render={() => <div>404</div>} />
        </Switch>
        </Container>
      </BrowserRouter>
    </>
  )
}

//<Route path="/" render={() => <div> 404 </div>} />

export default App;
