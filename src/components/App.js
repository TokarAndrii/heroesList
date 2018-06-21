import React, {Component} from 'react';
import styles from './App.css';
import HeroesList from './HeroesList'
import HeroesEditor from './HeroesEditor'

/*import heroeslist from '../heroesList'*/

class App extends Component {
    state = {
        heroes: []
    };

    componentDidMount() {
        this.fetchAllHeroes();
    }

    fetchAllHeroes = () => {
        const heroesLocalStorage = JSON.parse(localStorage.getItem('myAppDB'));
        console.log('heroesLocalStorage')
        console.log(heroesLocalStorage)
        //this.setState({heroes: heroesLocalStorage});
        this.setState(state => ({
            heroes: [...state.heroes, heroesLocalStorage]
        }));
    };

    addHeroeToList = () => {
        const myAppDBasString = {...this.state.heroes}
        localStorage.setItem('myAppDB', JSON.stringify(myAppDBasString))
    };

    addHeroe = heroe => {
        this.setState(state => ({
            heroes: [...state.heroes, heroe]
        }));
        this.addHeroeToList();
    };


    render() {
        //const heroes = {...this.state.heroes}
        return (
            <div className={styles.appHolder}>
                <HeroesList heroes={this.state.heroes}/>
                <HeroesEditor onFormSubmit={this.addHeroe}/>
            </div>
        );
    }
}

export default App;
