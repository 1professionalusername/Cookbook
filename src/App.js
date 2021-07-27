import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Recipes from './components/Recipes'
import Header from './components/Header'
//import Nav from './components/Nav'
//import Links from './Links'
// import Footer from './components/Footer'



// Without adding links to our site, it is only navigable 
// by typing the URLs in the browser. To add clickable 
// links to the site, we use the Link element from React Router 


export default function App() {
  return (
    <Router>
      <div>
      <Header />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/recipes">
            <Recipes />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}