import React, { ReactElement } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import '../src/styles/styles.scss'
import { Header } from './components'
import { store } from './redux'
import { RouteModel, routes } from './router'

const Routes = routes.map((route: RouteModel) => (
  <Route key={route.path} exact path={route.path} component={route.component} />
))

const App = (): ReactElement => {
  return (
    <Provider store={store}>
      <Router>
        <Header title={'Awsome Scrum Poker'} />
        <Switch>{Routes}</Switch>
      </Router>
    </Provider>
  )
}

export default App
