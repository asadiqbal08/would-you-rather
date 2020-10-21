import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './css/index.css';
import './css/login.css';
import './css/result.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import originReducer from './reducers/index';
import middleware from './middleware';

const store = createStore(originReducer, middleware);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
