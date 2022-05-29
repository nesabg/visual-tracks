import React, { useState, useContext } from 'react';
import { Switch, Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import styled from "styled-components";


import Main from "./components/Main";
import Navigation from "./components/Navigation";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from './pages/Register'
import Profile from './pages/Profile'
import { UserContext } from './context/UserContext'
import NotFound from './pages/NotFound';

const Wrapper = styled.div`
    background-color: ${props => props.backColor || 'red'};
    min-height: 100vh;
    height: 100%;
`



function App() {
  const [backColor, setBackColor] = useState('#123321')
  
  const { isLogin } = useContext(UserContext)

  return (
    <Router>
      <Wrapper backColor={backColor}>
        {/* <SketchPicker /> */}
        <Navigation backColor={backColor} setBackColor={setBackColor}/>
        <Main>
          <Switch>
            <Route path='/' exact component={Homepage}/> 
            <Route path='/register'>{ isLogin ? <Redirect to="/" /> : <Register /> } </Route>
            <Route path='/login'>{ isLogin ? <Redirect to="/" /> : <Login /> } </Route>
            <Route path='/profile'>{ isLogin ? <Profile /> : <Redirect to="/" />} </Route>
            <Route path='*' component={NotFound} />
          </Switch>
        </Main>
      </Wrapper>
    </Router>
  )
}

export default App
