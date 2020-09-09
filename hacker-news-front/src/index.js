import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { apiReducer } from "./reducers";
import thunk from "redux-thunk"

const store = createStore(apiReducer, applyMiddleware(thunk))


ReactDOM.render(
    <Provider store={store}>
 		 <App />
   </Provider>
    ,
    document.getElementById('root')
);
