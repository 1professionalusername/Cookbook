import React from 'react';
import Home from './components/Home'
import About from './components/About'
import Links from './components/Links'
import Nav from './components/Nav'
import Header from './components/Header';


//import './App.css';


// Switch groups all your routes together and ensures they take precidence from top to bottom



function App() {
  return (
    <div className='App_routes'>
      <Home />
      <About />
      <Header />
      <Nav />
      <Links />
    </div>

  )
}

export default App;
