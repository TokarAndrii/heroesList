import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styles from './SavedSquad.css'
import SquadsList from './SquadsList'


export default class SavedSquad extends Component {
// eslint-disable-next-line
  countTotalOfSquad = (heroes, pattern) => this.props.countTotalOfSquad;
  handleDeleteSquad = (squad) => this.props.handleDeleteSquad(squad);


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
  squads: PropTypes.arrayOf(),
  countTotalOfSquad: PropTypes.func.isRequired,
  handleDeleteSquad: PropTypes.func.isRequired,
};

SavedSquad.defaultProps = {
  squads: [],
};


