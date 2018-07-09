import React, {Component} from 'react'
import styles from './SavedSquad.css'
import SquadsList from './SquadsList'


export default class SavedSquad extends Component {

    countTotalOfSquad = (heroes, pattern) => {
        return  this.props.countTotalOfSquad;
    };

    render() {
        const squads = [...this.props.squads];
        const heroes = [...this.props.heroes];

        //methods for coun totals characteristics of heroes
/*        const countTotalStrength = this.props.countTotalOfSquad(heroes, "strength");

        const countTotalSpeed = this.props.countTotalOfSquad(heroes, "speed");

        const countTotalIntelligence = this.props.countTotalOfSquad(heroes, "intelligence");*/


        return (
            <div className={styles.savedSquadHolder}>
                <SquadsList
                    squads={squads}
/*                    countTotalStrength={countTotalStrength}
                    countTotalIntelligence={countTotalIntelligence}
                    countTotalSpeed={countTotalSpeed} */
                    countTotalOfSquad={this.countTotalOfSquad()}
                />
            </div>
        );

    }
}


//SavedSquad.propTypes = {};
