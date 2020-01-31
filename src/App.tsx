import React from 'react';
import { store } from './redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import { routes, RouteModel } from './router';

const Routes = routes
  .map((route: RouteModel) =>
    <Route path={route.path}>{route.component}</Route>
  );

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          {Routes}
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
