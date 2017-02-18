import App from './containers/App'
import Skachat from './containers/Skachat.jsx'
import React from 'react'
import {
  Redirect,
  Route,
  Router,
  browserHistory
} from 'react-router'

export default function routes() {
  return (
    <Router history={browserHistory}>
      <Route
        path="/"
        component={App}
      />
      <Route
        path="/skachat"
        component={Skachat}
      />
    </Router>
  )
}
