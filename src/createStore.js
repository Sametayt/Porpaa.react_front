import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import customReducer from './store/reducer';
import adminReducer from './store/adminReducer';
import { reducer as formReducer } from 'redux-form';

const reducers = {
  // ... your other reducers here ...
  app: customReducer,
  form: formReducer,
  admin: adminReducer
};

const mainReducer = combineReducers(reducers);
const store = createStore(mainReducer, applyMiddleware(thunk));
export default store;
