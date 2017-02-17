import { App } from '../containers/App.jsx'
import { Skachat } from '../containers/Skachat.jsx'
import React from 'react'
import { Notfound } from './404.jsx'
import { Redirect, Route, Router, browserHistory } from 'react-router'

export default function MainRouter() {
  return (
    <Router history={browserHistory}>
      <Redirect from="/"
        to="profile" />
      <Route
        path="/"
        component={App}
      >
        <Route
          path="Skachat"
          component={Skachat}
        >
 
        </Route>
      </Route>
      <Route
        path="*"
        component={Notfound}
      />
    </Router>
  )
}