import React, {Component} from 'react';
import styles from './App.css';
import HeroesList from './HeroesList'
import HeroesEditor from './HeroesEditor'
import Modal from 'react-modal'
import Button from './shared/Button'
import Appbar from './shared/appbar/index'
import Heroesfilter from './Heroesfilter'
import {getVisibleHeroes} from '../utils/selectors'

Modal.setAppElement('#root');

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        width: '250px'
    }
};


class App extends Component {
    state = {
        heroes: [],
        isModalOpen: false,
        filter: '',
    };

    handleOpenModal = () => this.setState({isModalOpen: true});
    handleCloseModal = () => this.setState({isModalOpen: false});

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
            heroes: [...state.heroes, heroe]
        }), this.writeToLocalStorage);
        this.handleCloseModal();
    };

    deleteHeroe = heroe => {
        this.setState(state => ({
            heroes: state.heroes.filter(index => index.id !== heroe.id)
        }), this.writeToLocalStorage)
    };


    updateHeroe = heroe => {
        this.setState(state => ({
            heroes: state.heroes.map(index => index.id === heroe.id ? heroe : index)
        }), this.writeToLocalStorage)
    };

    handleFilterChange = str => {
        this.setState({ filter: str });
    };


    render() {
        const heroes = [...this.state.heroes];
        const {isModalOpen, filter} = this.state;
        const visibleHeroes = getVisibleHeroes(heroes,filter);
        return (
            <div className={styles.appHolder}>
                <Appbar>
                    <Heroesfilter filter={filter} onFilterChange={this.handleFilterChange} className={styles.heroesFilter}/>
                    <Button text="Create Heroe" onClick={this.handleOpenModal} className={styles.createHeroBtn}/>
                  </Appbar>
                {/*<HeroesList heroes={heroes} onDelete={this.deleteHeroe} onUpdate={this.updateHeroe}/>*/}
                <HeroesList heroes={visibleHeroes} onDelete={this.deleteHeroe} onUpdate={this.updateHeroe}/>

                <Modal
                    isOpen={isModalOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.handleCloseModal}
                    style={customStyles}
                    contentLabel="Modal Window">

                    <HeroesEditor onFormSubmit={this.addHeroe} buttonText="Add" title="Heroes create form"/>
                    <button onClick={this.handleCloseModal} className={styles.closeBtn}>X</button>
                </Modal>
            </div>
        );
    }
}

export default App;
