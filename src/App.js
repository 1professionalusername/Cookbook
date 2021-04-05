import React from 'react'
import { Route, Switch } from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import Nav from './components/Nav'


function App() {
  return (
    <main>

      {/* Switch groups all your routes together and ensures they take precidence from top to bottom */}
      {/* Exact is necessary because the other URLs also contain '/', which could cause bugs*/}
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
      </Switch>
      <Nav />
    </main>

  )
}

export default App;