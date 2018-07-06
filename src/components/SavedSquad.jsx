import React, {Component} from 'react'
import Squad from './Squad'
import styles from './SavedSquad.css'
import Button from './shared/Button'
import SquadsList from './SquadsList'



export default class SavedSquad extends Component {

    render() {
        const squads = [...this.props.squads];
        const heroes = [...squads[1].heroes];

        console.log(squads, "squads from SavedSquad");
        //console.log(squads[0].heroes, "heroes from SavedSquad");

        //methods for coun totals characteristics of heroes
        const countTotalStrength = this.props.countTotalOfSquad(heroes, "strength");

        const countTotalSpeed = this.props.countTotalOfSquad(heroes, "speed");

        const countTotalIntelligence = this.props.countTotalOfSquad(heroes, "intelligence");

        return (
            <div className={styles.savedSquadHolder}>
                <SquadsList squads={squads}/>
            </div>
        );

    }
}


//SavedSquad.propTypes = {};
