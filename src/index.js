import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import companyReducer from "./store/reducers/company";
import treeReducer from "./store/reducers/tree";
import employeeReducer from "./store/reducers/employee";
import projectReducer from "./store/reducers/project";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootReducer = combineReducers({  
  tr: treeReducer,
  cmp: companyReducer,
  emp: employeeReducer,
  pr: projectReducer
});

const logger = store => {
  return next => {
    return action => {
      // console.log('[Middleware] Dispatching', action);
      const result = next(action);
      // console.log('[Middleware] next state', store.getState());
      return result;
    }
  }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
