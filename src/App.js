import React, { Component } from 'react';
import './App.css';
import Contacts from './Components/Contacts';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import Portfolio from './Components/Portfolio';
import Project from './Components/Project';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from './Components/NoMatch';
class App extends Component {

 render() {
   const style = {
     display: 'flex',
     JustifyContent: 'center',
     alignItems: 'center'
   }
   return (
    //  <div className="App">
    <Router>
     <NavBar />
     <div>
     <Switch>
     
     <Route exact path="/portfolio-react-gt/" component={Portfolio} />
     <Route exact path="/portfolio-react-gt/projects" component={Project} />
     <Route exact path="/portfolio-react-gt/contacts" component={Contacts} />
     <Route component={NoMatch} />
     
     </Switch>
     
     </div>
     <Footer />
     </Router>
    //  </div>
   )
 }
}

export default App;
