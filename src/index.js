import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

let initialState = {
  count: 0
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'increment':
      return {
        count: state.count + 1
      }
    case 'decrement':
      return {
        count: state.count - 1
      }
    default:
      return state;
  }
}
const store = createStore(
  reducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

//add dev tools
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

ReactDOM.render(
  <Provider store={ store }>
    <Counter />
  </Provider>,

  document.getElementById('root')
);
serviceWorker.unregister();
