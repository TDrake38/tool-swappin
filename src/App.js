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

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

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
  // return (
  //   <>
  //     <BrowserRouter>
  //         <NavBar />
  //         <Container>
  //           <Switch>
  //             <Route path="/messages" exact component={Messages} />
  //             <Route path="/search" exact component={Search} />
  //             <Route path="/profile" exact component={Profile}>            
  //             </Route>  
  //             <Route path="/" exact component={Home}/>
  //             <Route render={() => <div>404</div>} />
  //           </Switch>
  //         </Container>
  //     </BrowserRouter>
  //   </>
  // )
}

export default App;
