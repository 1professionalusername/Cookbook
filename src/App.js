import React from 'react'
import { Route, Switch } from "react-router-dom"
import Home from './components/Home'
import About from './components/About'



function App() {
  return (
    <main>

      {/* We wrap our routes with Switch to tell to React Router to load only one route at a time */}
      {/* By updating the Home route with exact, it will be rendered only if it matches the full path*/}
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
      </Switch>
    </main>

  )
}

export default App;