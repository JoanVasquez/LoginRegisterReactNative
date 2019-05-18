import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import AllReducers from './Reducers/AllReducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = createStore(
  AllReducers,
  process.env.NODE_ENV === 'production'
    ? applyMiddleware(thunk)
    : composeEnhancers(applyMiddleware(thunk))
);

export default Store;
