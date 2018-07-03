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
        const heroes = [...this.props.heroes];
        return (
            <div className={styles.squadsEditorHolder}>
                <h3>Squad Editor</h3>
                <div className={styles.buttonHolder}>
                    <Button text="Save Squad" onClick={this.handleClickSaveBtn}/>
                    <Button text="Reset Editor" onClick={this.handleClickResetBtn}/>
                </div>
                <div className={styles.totalInfoHolder}>
                    <div className={styles.totalInfoHolderRow}>Strength total: <span className={styles.totals}>1</span></div>
                    <div className={styles.totalInfoHolderRow}>Intelligence total: <span className={styles.totals}>1</span></div>
                    <div className={styles.totalInfoHolderRow}>Speed total: <span className={styles.totals}>1</span></div>
                </div>
                <HeroesList heroes={heroes} isActiveSquad={false} isActiveEdit={false}/>
            </div>)
    }
}

export default SquadEditor