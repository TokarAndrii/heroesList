import React, {Component} from 'react'
import styles from './SavedSquad.css'
import SquadsList from './SquadsList'
import PropTypes from 'prop-types'


export default class SavedSquad extends Component {

    countTotalOfSquad = (heroes, pattern) => {
        return this.props.countTotalOfSquad;
    };
    handleDeleteSquad = (squad) => {
        return this.props.handleDeleteSquad(squad);
    };


    render() {
        const squads = [...this.props.squads];

        return (
            <div className={styles.savedSquadHolder}>
                <h3 className={styles.title}>Saved Squads qnty: {squads.length}</h3>
                <SquadsList
                    squads={squads}
                    countTotalOfSquad={this.countTotalOfSquad()}
                    handleDeleteSquad={this.handleDeleteSquad}
                />
            </div>
        );

    }
}

SavedSquad.propTypes = {
    squads: PropTypes.array,
    heroes: PropTypes.array,
    countTotalOfSquad: PropTypes.func.isRequired,
    handleDeleteSquad: PropTypes.func.isRequired,
};


