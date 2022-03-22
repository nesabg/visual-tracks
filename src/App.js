import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";

import './App.css'
import Main from "./components/Main";
import Navigation from "./components/Navigation";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from './pages/Register'

const Wrapper = styled.div`
    background-color: #282c34;
    min-height: 100vh;
    height: 100%;
`


function App() {
  return (
    <Router>
      <Wrapper>
        <Navigation />
        <Main>
          <Switch>
            <Route path='/' exact component={Homepage}/> 
            <Route path='/register' component={Register}/> 
            <Route path='/login' component={Login}/> 
          </Switch>
        </Main>
      </Wrapper>
    </Router>
  )
}

export default App
