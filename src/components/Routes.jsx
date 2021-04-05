import React from 'react'
import { Route, Switch } from "react-router-dom"
import Home from './Home'
import Header from './Header'
import Nav from './Nav'
import About from './About'
//import Links from './Links'


function Routes() {
    return (
        <div className='routes'>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/header' component={Header} />
                <Route path='/nav' component={Nav} />
            </Switch>
        </div>

    )
}

export default Routes;