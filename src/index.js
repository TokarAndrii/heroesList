import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import heroesListStart from '../src/heroesList'


const data = localStorage.getItem('myAppDB');
//init DB
console.log(data)


if (!data) {
    localStorage.setItem('myAppDB', JSON.stringify({
        heroes: heroesListStart
    }))
    console.log(data)
}




ReactDOM.render(<App/>, document.getElementById('root'));

