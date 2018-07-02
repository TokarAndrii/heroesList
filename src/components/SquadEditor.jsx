import React, {Component} from 'react'
import styles from './SquadEditor.css'
import HeroesList from './HeroesList'
import Button from './shared/Button'

/*const INITIAL_STATE = {
    listDetailsShow: false,
    isModalOpen: false,
    heroes: [],

};*/

class SquadEditor extends Component {
    //state = {...INITIAL_STATE};

    handleClickSaveBtn = () => {

    };

    handleClickResetBtn = () => {

    };


    render() {
        //const heroes = [...this.state.heroes];
        const squadEditorIds = [...this.props.squadEditorIds];
        return (
            <div className={styles.squadsEditorHolder}>
                <h3>Squad Editor</h3>
                {/*<HeroesList heroes={heroes}/>*/}
                <Button text="Save Squad" onClick={this.handleClickSaveBtn}/>
                <Button text="Reset Editor" onClick={this.handleClickResetBtn}/>
                <div>Strength total: 1</div>
                <div>Intelligence total: 1</div>
                <div>Speed total: 1</div>

            </div>)
    }
}

export default SquadEditor