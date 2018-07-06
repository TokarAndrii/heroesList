import React, {Component} from 'react'
import Squad from './Squad'
import styles from './SavedSquad.css'
//import {getHeroesBySquadEditorIds} from '../utils/selectors'


export default class SavedSquad extends Component {
    countTotalSpeed = () => {
        const squads = (this.props.squads);
        const heroes = [...squads[0].heroes];
        console.log(heroes)
        //this.props.getTotal(heroes,'speed');
    };

    render() {
        const squads = (this.props.squads);
        //console.log(squads, "squads from SavedSquad");
        console.log(squads[0].heroes, "heroes from SavedSquad");
        const heroes = [...squads[0].heroes];
        const countTotalStrength = this.props.countTotalOfSquad(heroes, "strength");
        const countTotalSpeed = this.props.countTotalOfSquad(heroes, "speed");
        const countTotalIntelligence = this.props.countTotalOfSquad(heroes, "intelligence");

        return (
            <div className={styles.savedSquadHolder}>
                <h3 className={styles.title}>Saved Squads</h3>
                {squads.map((squad, index) => (
                    <ul className={styles.savedSquadList}>

                        <li key={squads[index].id} className={styles.savedSquadItem}>
                            <div>
                                <h3 className={styles.headerSquadsNames}>Heroes</h3>
                                <h3 className={styles.headerSquadsTotals}>Totals of Squad</h3>
                            </div>
                            <div className={styles.credentionalHolder}>
                                <Squad heroes={heroes}/>
                            </div>
                            <div className={styles.credentionalHolder}>
                                <p>Total Speed: <span className={styles.counTotalHolder}>{countTotalSpeed}</span></p>
                                <p>Total Strength: <span className={styles.counTotalHolder}>{countTotalStrength}</span></p>
                                <p>Total Intelligence: <span className={styles.counTotalHolder}>{countTotalIntelligence}</span></p>
                            </div>
                        </li>

                    </ul>

                ))}
            </div>
        );

    }
}


//SavedSquad.propTypes = {};
