import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import customReducer from './store/reducer';
import adminReducer from './store/adminReducer';
import { reducer as formReducer } from 'redux-form';
import store from './createStore';
// import { AbilityContext } from './ability-context';
// import ability from './ability';

// const reducers = {
//   // ... your other reducers here ...
//   app: customReducer,
//   form: formReducer,
//   admin: adminReducer
// };
// const mainReducer = combineReducers(reducers);
// const store = createStore(mainReducer, applyMiddleware(thunk));

ReactDOM.render(
  // <AbilityContext.Provider value={ability}>
  <Provider store={store}>
    <App />
  </Provider>,
  // </AbilityContext.Provider>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
