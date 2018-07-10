import React, {Component} from 'react'
import styles from './SavedSquad.css'
import SquadsList from './SquadsList'


export default class SavedSquad extends Component {

    countTotalOfSquad = (heroes, pattern) => {
        return this.props.countTotalOfSquad;
    };
    handleDeleteSquad = (squad) => {
        console.log('handleDeleteSquad from SavedSquad');
        return this.props.handleDeleteSquad(squad);
    };


    render() {
        const squads = [...this.props.squads];

        return (
            <div className={styles.savedSquadHolder}>
                <SquadsList
                    squads={squads}
                    countTotalOfSquad={this.countTotalOfSquad()}
                    handleDeleteSquad={this.handleDeleteSquad}
                />
            </div>
        );

    }
}


//SavedSquad.propTypes = {};
