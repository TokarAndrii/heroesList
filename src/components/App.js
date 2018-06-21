import React, {Component} from 'react';
import styles from './App.css';
import HeroesList from './HeroesList'
import HeroesEditor from './HeroesEditor'
/*import heroeslist from '../heroesList'*/

const INITIAL_STATE = {
    heroes: JSON.parse(localStorage.getItem('myAppDB'))
};


class App extends Component {
    state = {...INITIAL_STATE};

/*    componentDidMount() {
        this.fetchAllHeroes();
    }

    fetchAllHeroes = () => {
        const heroesLocalStorage = JSON.parse(localStorage.getItem('myAppDB'));
        //this.setState({heroes: heroesLocalStorage});
        this.setState(state => ({
            heroes: [...heroesLocalStorage]
        }));
    };*/

    addHeroeToList = () => {
        const [...myAppDBasString] = this.state.heroes;
        console.log(this.state.heroes)
        localStorage.removeItem('myAppDB');
        localStorage.setItem('myAppDB', JSON.stringify(myAppDBasString))

    };

    addHeroe = heroe => {
        this.setState(state => ({
            heroes: [...state.heroes, heroe]
        }));
        this.addHeroeToList();
    };


    render() {
        const heroes = [...this.state.heroes];
        return (
            <div className={styles.appHolder}>
                <HeroesList heroes={heroes}/>
                <HeroesEditor onFormSubmit={this.addHeroe}/>
            </div>
        );
    }
}

export default App;
