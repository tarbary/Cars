import { Provider } from 'react-redux'
import React from 'react'
import { render } from 'react-dom'
// import App from './containers/App'
import './styles/app.css'
import configureStore from './store/configureStore'
import routes from './routes'

const store = configureStore()

render(
  <Provider store={store}>
    {routes(store)}
  </Provider>,
  document.getElementById('root')
)
