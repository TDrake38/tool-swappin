import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { useAuth } from './components/Auth';
import { Container } from "react-bootstrap";
//import LoginContext from './LogInContext';
import Home from './components/Home';
import Profile from './components/Profile';
import Messages from './components/Messages';
import Search from './components/Search';
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom"
import NavBar from './components/NavBar';

function App() {
  //const [loggedIn, setLoggedIn] = useState(false);

//This is the site I am following to implement the user log in
  //https://morioh.com/p/27ce6491ad3c

  //const [authenticated, user] = useAuth(auth);
  // const [logIn, setLogIn] = useState('');

  // const fetchUser = async signal => {
  //   const url = new URL('http://localhost:3001/users');
  //   const response = await fetch(url, { signal });
  //   const { value } = await response.json();
  
  //   setLogIn(value.logIn);
  // };

  // useEffect(() => {
  //   if (!logIn) {
  //     const controller = new AbortController();
  //     fetchUser(controller.signal);

  //     return () => controller.abort();
  //   }
  // }, [logIn]);

  return (
    <>
      <BrowserRouter>
          <NavBar />
          <Container>
            <Switch>
              <Route path="/messages" exact component={Messages} />
              <Route path="/search" exact component={Search} />
              <Route path="/profile" exact component={Profile}>            
              </Route>  
              <Route path="/" exact component={Home}/>
              <Route render={() => <div>404</div>} />
            </Switch>
          </Container>
      </BrowserRouter>
    </>
  )

  // return (
  //   <>
  //     <BrowserRouter>
  //       <LoginContext.Provider value={[loggedIn, setLoggedIn]}>
  //         <NavBar />
  //         <Container>
  //           <Switch>
  //             <Route path="/messages" exact component={Messages} />
  //             <Route path="/search" exact component={Search} />  
  //             <Route path="/" exact component={Home}/>
  //             <Route path="/profile">            
  //               {loggedIn ? <Profile /> : <Redirect to="/"/>}
  //             </Route>
  //             <Route render={() => <div>404</div>} />
  //           </Switch>
  //         </Container>
  //       </LoginContext.Provider>
  //     </BrowserRouter>
  //   </>
  // )
}

export default App;
