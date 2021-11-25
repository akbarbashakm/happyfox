import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Server, Model } from 'miragejs';
import DB from './db/index.json';
import Api from './constants/api';

import reducer, { initialState } from './redux/reducer';

const store = createStore(reducer, initialState, applyMiddleware(thunk));

new Server({
  models: {
    todo: Model
  },
  routes() {
    this.namespace = "api";
    this.get(Api.GET_EMPLOYEE_URL, schema => {
      return {
        ...DB
      }
    });

    this.put(Api.CHANGE_EMPLOYEE_URL, (schema, reques) => {
      debugger
    })
  }
})


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();