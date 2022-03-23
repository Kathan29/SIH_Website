import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import styled from 'styled-components';
import Login from './components/Login';
import SignUp from './components/SignUp';
import History from './components/History'
//import SignUp from './components/SignUp';
//import LinkingBar from './components/LinkingBar';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom'
import Head from './components/Head';
//import ReactBootstrap from 'react-bootstrap';
import Main from './components/Main';
import Dashboard from './components/Dashboard';
function App() {

  
  return (
    <Router>
    
    
         <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
            
          </Route>
          <Route exact path="/main">
            <Main />
            
          </Route>
          <Route exact path="/history">
            <History />
            
          </Route>
        </Switch>
     
     
     </Router>
    
        
    

  );
}



export default App;
