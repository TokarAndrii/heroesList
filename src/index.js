import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import heroesListStart from '../src/heroesList'
import squadsListStart from '../src/squadslist'


const data = localStorage.getItem('myAppDB');//init DB
if (!data) {
    localStorage.setItem('myAppDB', JSON.stringify({
        heroes: heroesListStart,
        squads: squadsListStart,
    }));
    console.log(data)
}


ReactDOM.render(<App/>, document.getElementById('root'));

