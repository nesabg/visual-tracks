import { Switch, Route, BrowserRouter as Router, Redirect } from "react-router-dom";

import './App.css'
import Main from "./components/Main";
import Navigation from "./components/Navigation";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from './pages/Register'


function App() {
  return (
    <Router>
      <Navigation />
      <Main>
        <Switch>
          <Route path='/' exact component={Homepage}/> 
          <Route path='/register' component={Register}/> 
          <Route path='/login' component={Login}/> 
        </Switch>
      </Main>
    </Router>
  )
}

export default App
