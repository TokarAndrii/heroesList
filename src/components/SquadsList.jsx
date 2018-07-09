import React, {Component} from 'react';
import Squad from './Squad'
import styles from './SquadsList.css'

export default class SquadsList extends Component {
    countTotalOfSquad = (heroes, pattern) => {
        return  this.props.countTotalOfSquad;
    };

    render() {
        const squads = (this.props.squads);

        //const {countTotalStrength,countTotalSpeed,countTotalIntelligence} = this.props;
        const countTotalOfSquad = this.props;

        return (
            <div>
                {squads.map(current => (
                    <li key={current.id} className={styles.itemHolder}>
                        <Squad
                            squad={current}
                            className={styles.squad}
/*                            countTotalSpeed={countTotalSpeed}
                            countTotalIntelligence={countTotalIntelligence}
                            countTotalStrength={countTotalStrength}*/
                            countTotalOfSquad={this.countTotalOfSquad()}
                        />
                    </li>
                ))}

            </div>

        )
    }
}