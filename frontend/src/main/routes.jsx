import React from 'react'
//import { Router, Route, Redirect, hashHistory } from 'react-router'
import { HashRouter as Router, Route } from 'react-router-dom'; 
import Todo from '../todo/todo'
import About from '../about/about'

export default (props) => (
    <Router history={hashHistory}>

        <Route path='/todos' component={Todo} />
        <Route path='/about' component={About} />

        <Route from='*' to="/todos" />

    </Router>
)