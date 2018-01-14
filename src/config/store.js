// @flow
/*
import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import thunk from 'redux-thunk';

export default function configureStore() {
  let store = createStore(reducers, applyMiddleware(thunk));
  return store;
}


/*/
import { createStore, applyMiddleware } from 'redux';
// import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { ORM } from 'redux-orm';

import reducers from '../reducers';
import orm from '../orm';
import bootstrap from '../orm/bootstrap'

export function configureStore() {

  const createStoreWithMiddleware = applyMiddleware(
    // createLogger(),
    thunk
  )(createStore);

  const store = createStoreWithMiddleware(reducers, bootstrap(orm));

  return store;
}

//*/
