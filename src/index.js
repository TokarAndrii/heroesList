import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import heroesListStart from '../src/heroesList'

//init DB
const [...myAppDB] = heroesListStart;
localStorage.getItem('myAppDB') === null ? localStorage.setItem('myAppDB', JSON.stringify(myAppDB)) : null;
const received = JSON.parse(localStorage.getItem('myAppDB'));


ReactDOM.render(<App/>, document.getElementById('root'));

