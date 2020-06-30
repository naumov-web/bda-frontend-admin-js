import React from 'react';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from '../../store/reducers';

import Router from '../Router';
import RouterWrapper from '../Router/RoutesWrapper';

import '../../assets/styles/main.sass';

const store = createStore(combineReducers(reducers));

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <RouterWrapper>
          <Router />
        </RouterWrapper>
      </Provider>
    </div>
  );
}

export default App;
