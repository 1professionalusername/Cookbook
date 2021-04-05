import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import './App.css';
// BrowserRouter is a type of route provided by React Router
// I renamed it Router because it is shorter than BrowserRouter, but we can name it whatever we want
// It builds classic URLs and uses the History API


// BrowserRouter, usually aliased as Router(below) is used to wrap your app component
// Link components are used to generate links to your routes. 
// You can add Link components to point at different routes with the 'to' attribute
// Route components are responsible for showing -or hiding- the components they contain
// We can think of our Route component as the boat on the ocean, and the Link as the wind and sails that make that boat move.
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);


