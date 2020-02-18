import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//added to file
import {Provider} from 'react-redux';
import {createStore } from 'redux';


import 'bulma/css/bulma.css';
import './styles.scss';
import { featuresReducer } from './reducers/featuresReducer';

//imported const from app.js
const store = createStore(featuresReducer)

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
, rootElement);
