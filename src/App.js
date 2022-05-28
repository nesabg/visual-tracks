import React, { useState } from 'react';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";


import Main from "./components/Main";
import Navigation from "./components/Navigation";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from './pages/Register'
import Profile from './pages/Profile'

const Wrapper = styled.div`
    background-color: ${props => props.backColor || 'red'};
    min-height: 100vh;
    height: 100%;
`


function App() {
  const [backColor, setBackColor] = useState('#123321')
  return (
    <Router>
      <Wrapper backColor={backColor}>
        {/* <SketchPicker /> */}
        <Navigation backColor={backColor} setBackColor={setBackColor}/>
        <Main>
          <Switch>
            <Route path='/' exact component={Homepage}/> 
            <Route path='/register' component={Register}/> 
            <Route path='/login' component={Login}/> 
            <Route path='/profile' component={Profile}/> 
          </Switch>
        </Main>
      </Wrapper>
    </Router>
  )
}

export default App
