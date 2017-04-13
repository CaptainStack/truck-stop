import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.css';
import {createStore} from 'redux';
import reducer from './reducer';

export const store = createStore(reducer);

const render = () => ReactDOM.render(<App state={store.getState()} />, document.getElementById('root'));

render();
store.subscribe(render);
store.subscribe(() => localStorage.setItem('reduxState', JSON.stringify(store.getState())));
