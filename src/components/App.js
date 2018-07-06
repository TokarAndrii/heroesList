import React, {Component} from 'react';
import styles from './App.css';
import HeroesList from './HeroesList'
import HeroesEditor from './HeroesEditor'
import Modal from 'react-modal'
import Button from './shared/Button'
import Appbar from './shared/appbar/index'
import Heroesfilter from './Heroesfilter'
import SquadEditor from './SquadEditor'
import SavedSquad from './SavedSquad'
import {getAvailHeroes, getHeroesBySquadEditorIds, getTotal} from '../utils/selectors'


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
        squadEditorIds: [],
        squads: [
            {
                id: '1',
                heroes: [
                    {
                        id: "e6e40c5b-dab6-4031-9276-0f65fd1ce9d2",
                        intelligence: "9",
                        name: "Batman",
                        speed: "10",
                        strength: "7"
                    },
                    {
                        id: "87405676-5cf7-4c33-b7da-024d643812f1",
                        intelligence: "10",
                        name: "Super Man",
                        speed: "9",
                        strength: "6",
                    },
                ],
            },
        ],
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
            heroes: this.state.heroes,
            squadEditorIds: this.state.squadEditorIds,
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

    deleteHeroeFromSquadEditor = heroe => {
        this.setState(state => ({
            squadEditorIds: state.squadEditorIds.filter(index => index !== heroe.id)
        }), this.writeToLocalStorage);
    };


    updateHeroe = heroe => {
        this.setState(state => ({
            heroes: state.heroes.map(index => index.id === heroe.id ? heroe : index)
        }), this.writeToLocalStorage)
    };

    handleFilterChange = str => {
        this.setState({filter: str});
    };

    handleSquadEditorAddBtnClick = (heroe) => {
        this.setState(state => ({
            squadEditorIds: [...state.squadEditorIds, heroe.id]
        }), this.writeToLocalStorage)
    };

    countTotalStrength = () =>
        getTotal(getHeroesBySquadEditorIds([...this.state.heroes], [...this.state.squadEditorIds]), 'strength');

    countTotalIntelligence = () =>
        getTotal(getHeroesBySquadEditorIds([...this.state.heroes], [...this.state.squadEditorIds]), 'intelligence');

    countTotalSpeed = () =>
        getTotal(getHeroesBySquadEditorIds([...this.state.heroes], [...this.state.squadEditorIds]), 'speed');

    handleClickSaveBtnSquadEditor = () => {
        console.log('handleClickSavetBtn from App');
        this.setState(state => ({
            squadEditorIds: []
        }), this.writeToLocalStorage)
    };


    countTotalOfSquad = (heroes, pattern) => {
      return  getTotal(heroes, pattern)
    };

    handleClickResetBtnSquadEditor = () => {
        console.log('handleClickResetBtn from App');
        this.setState(state => ({
            squadEditorIds: []
        }), this.writeToLocalStorage)
    };

    render() {
        const heroes = [...this.state.heroes];
        const squads = [...this.state.squads];
        //console.log(squads, 'squads from App')
        const {isModalOpen, filter} = this.state;
        const squadEditorIds = [...this.state.squadEditorIds];
        const visibleHeroes = getAvailHeroes(heroes, filter, squadEditorIds);
        const squadEditorIdsHeroes = getHeroesBySquadEditorIds(heroes, squadEditorIds);
        return (
            <div className={styles.appHolder}>
                <Appbar>
                    <Heroesfilter filter={filter} onFilterChange={this.handleFilterChange}
                                  className={styles.heroesFilter}/>
                    <Button text="Create Heroe" onClick={this.handleOpenModal} className={styles.createHeroBtn}/>
                </Appbar>
                <HeroesList heroes={visibleHeroes} onDelete={this.deleteHeroe} onUpdate={this.updateHeroe}
                            handleSquadEditorAddBtnClick={this.handleSquadEditorAddBtnClick}/>
                <SquadEditor
                    heroes={squadEditorIdsHeroes}
                    onDelete={this.deleteHeroeFromSquadEditor}
                    countTotalStrength={this.countTotalStrength}
                    countTotalIntelligence={this.countTotalIntelligence}
                    countTotalSpeed={this.countTotalSpeed}
                    handleClickResetBtn={this.handleClickResetBtnSquadEditor}
                    handleClickSaveBtn={this.handleClickSaveBtnSquadEditor}>
                </SquadEditor>
                <SavedSquad squads={squads} allHeroes={heroes} countTotalOfSquad={this.countTotalOfSquad}/>
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
