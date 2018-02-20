// @flow
import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

// import { configureStore } from './src/config/store';
import App from './src/app.js';

import bootstrap from './src/orm/bootstrap';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import reducers from './src/reducers';
import thunk from 'redux-thunk';

function configureStore() {
  console.log("Configuring store..");

  const createStoreWithMiddleware = applyMiddleware(
    __DEV__ && createLogger(), // apparently causes a ton of performance issues
    thunk,
  )(createStore);

  const store = createStoreWithMiddleware(reducers, bootstrap());

  return store;
}

const store = configureStore();

function root() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent('Beefcake', () => root);
