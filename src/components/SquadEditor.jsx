import React, {Component} from 'react'
import styles from './SquadEditor.css'
import HeroesList from './HeroesList'
import Button from './shared/Button'


class SquadEditor extends Component {

    handleClickSaveBtn = () => {
        console.log('handleClickSavetBtn from SquadEditor');
        this.props.handleClickSaveBtn();
    };

    handleClickResetBtn = () => {
        console.log('handleClickResetBtn from SquadEditor')
        this.props.handleClickResetBtn();
    };

    countTotalStrength = () => {
        return this.props.countTotalStrength();
    };

    countTotalIntelligence = () => {
        return this.props.countTotalIntelligence();
    };

    countTotalSpeed = () => {
        return this.props.countTotalSpeed();
    };

    onDelete = (hero) => {
        return this.props.onDelete(hero)
    };


    render() {
        const heroes = [...this.props.heroes];
        return (
            <div className={styles.squadsEditorHolder}>
                <h3>Squad Editor</h3>
                <div className={styles.buttonHolder}>
                    <Button text="Save Squad" onClick={this.handleClickSaveBtn}/>
                    <Button text="Reset Squad" onClick={this.handleClickResetBtn}/>
                </div>
                <div className={styles.totalInfoHolder}>
                    <div className={styles.totalInfoHolderRow}>Strength total: <span
                        className={styles.totals}>{this.countTotalStrength()}</span>
                    </div>
                    <div className={styles.totalInfoHolderRow}>Intelligence total: <span
                        className={styles.totals}>{this.countTotalIntelligence()}</span></div>
                    <div className={styles.totalInfoHolderRow}>Speed total: <span
                        className={styles.totals}>{this.countTotalSpeed()}</span>
                    </div>
                </div>
                <HeroesList heroes={heroes} isActiveSquad={false} isActiveEdit={false} onDelete={this.onDelete}/>
            </div>)
    }
}

export default SquadEditor