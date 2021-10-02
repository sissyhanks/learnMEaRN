import React from 'react';
import ReactDOM from 'react-dom';
//provider keeps track of state on a global level so we don't have to be the child of a parent to access store state
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

// following line of code imports the posts function from post js in teh reducers folder and then is stored in const store below  
import reducers from './reducers';

import App from './App';

//set redux
const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));