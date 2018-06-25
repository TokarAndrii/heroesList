import React, {Component} from 'react';
import styles from './App.css';
import HeroesList from './HeroesList'
import HeroesEditor from './HeroesEditor'


class App extends Component {
    state = {
        heroes: []
    };

    componentDidMount() {
        const data = localStorage.getItem('myAppDB');
        if (data) {
            this.setState(JSON.parse(data))
        }
    }


    writeToLocalStorage = () => {
        localStorage.setItem('myAppDB', JSON.stringify({
            heroes: this.state.heroes
        }))
    };

    addHeroe = heroe => {
        this.setState(state => ({
            heroes: [...state.heroes,heroe]
        }), this.writeToLocalStorage);
    };

    deleteHeroe = heroe => {
        this.setState(state=>({
            heroes: state.heroes.filter(index=>index.id!==heroe.id)
        }),this.writeToLocalStorage)


    };


    render() {
        const heroes = [...this.state.heroes];
        return (
            <div className={styles.appHolder}>
                <HeroesList heroes={heroes} onDelete={this.deleteHeroe}/>
                <HeroesEditor onFormSubmit={this.addHeroe}/>
            </div>
        );
    }
}

export default App;
