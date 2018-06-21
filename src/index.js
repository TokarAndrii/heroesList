import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import heroesListStart from '../src/heroesList'

//init DB
const myAppDB = {...heroesListStart};
const myAppDBasString = JSON.stringify(myAppDB);
/*console.log('myAppDB');
console.log(myAppDB);*/
localStorage.getItem('myAppDB') === null ? localStorage.setItem('myAppDB', myAppDBasString) : null;
const received = JSON.parse(localStorage.getItem('myAppDB'));
//console.log(received);

ReactDOM.render(<App/>, document.getElementById('root'));

