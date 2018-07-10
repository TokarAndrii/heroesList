import React, {Component} from 'react';
import Squad from './Squad'
import styles from './SquadsList.css'

export default class SquadsList extends Component {
    countTotalOfSquad = (heroes, pattern) => {
        return  this.props.countTotalOfSquad;
    };
    handleDeleteSquad = (squad)=> {
        console.log('handleDeleteSquad from SquadsList');
        return this.props.handleDeleteSquad(squad);
    };


    render() {
        const squads = (this.props.squads);

        return (
            <div>
                {squads.map(current => (
                    <li key={current.id} className={styles.itemHolder}>
                        <Squad
                            squad={current}
                            className={styles.squad}
                            countTotalOfSquad={this.countTotalOfSquad()}
                            handleDeleteSquad={this.handleDeleteSquad}
                        />
                    </li>
                ))}

            </div>

        )
    }
}