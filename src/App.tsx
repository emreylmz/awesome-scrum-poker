import React, { ReactElement } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.scss'
import { store } from './redux'
import { RouteModel, routes } from './router'

const Routes = routes.map((route: RouteModel) => (
  <Route key={route.path} path={route.path} component={route.component} />
))

const App = (): ReactElement => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>{Routes}</Switch>
      </Router>
    </Provider>
  )
}

export default App
