import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useContext, useState} from 'react';
import { useLocalState } from './components/Hooks';
import { Container } from "react-bootstrap";
import LoginContext from './LogInContext';
import Home from './components/Home';
import Profile from './components/Profile';
import Messages from './components/Messages';
import Search from './components/Search';
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom"
import NavBar from './components/NavBar';

//this probably doesnt need to be here just following a tutorial.
//export const LoginContext = React.createContext();

function App() {
  //const [loggedIn, setLoggedIn] = useContext(LoginContext);
  //this was the original
    const [loggedIn, setLoggedIn] = useState(false);
  //const [loggedIn, setLoggedIn] = useLocalState('token');

  return (
    <>
      <BrowserRouter>
        <LoginContext.Provider value={[loggedIn, setLoggedIn]}>
          <NavBar />
          <Container>
            <Switch>
              <Route path="/messages" exact component={Messages} />
              <Route path="/search" exact component={Search} />  
              <Route path="/" exact component={Home}/>
              <Route path="/profile">            
                {loggedIn ? <Profile /> : <Redirect to="/"/>}
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
