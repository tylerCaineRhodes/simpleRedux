import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';
import * as serviceWorker from './serviceWorker';

//add dev tools
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

ReactDOM.render(
    <Counter />,
  document.getElementById('root')
);
serviceWorker.unregister();
