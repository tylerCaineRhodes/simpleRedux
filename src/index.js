import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider, } from 'react-redux';
import counter, { randomValueAddedToState } from './countReducer';

const rootReducer = combineReducers({
  counter,
  randomValueAddedToState,
});

const store = createStore(
  rootReducer,
  //add dev tools
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log('here is the initial state --> ', store.getState())

ReactDOM.render(
  <Provider store={ store }>
    <Counter />
  </Provider>,

  document.getElementById('root')
);
serviceWorker.unregister();
