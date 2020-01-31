import React from 'react';
import { Provider } from 'react-redux';
import { store } from "./redux";
import './App.scss';

const App = () => {
  return (
    <Provider store={store}>
    </Provider>
  );
};

export default App;
