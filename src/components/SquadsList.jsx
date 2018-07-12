import React, {Component} from 'react';
import PropTypes from 'prop-types'
import Squad from './Squad'
import styles from './SquadsList.css'


export default class SquadsList extends Component {
  static propTypes = {
    squads: PropTypes.arrayOf().isRequired,
    countTotalOfSquad: PropTypes.func.isRequired,
    handleDeleteSquad: PropTypes.func.isRequired,
  };
  // eslint-disable-next-line
  countTotalOfSquad = (heroes, pattern) => this.props.countTotalOfSquad;

  handleDeleteSquad = (squad) => this.props.handleDeleteSquad(squad);


  render() {
    const squads = (this.props.squads);

    return (
      <div>
        {squads.map(current => (
          <li key={current.id} className={styles.itemHolder}>
            <Squad
              squad={current}
              countTotalOfSquad={this.countTotalOfSquad()}
              handleDeleteSquad={this.handleDeleteSquad}
            />
          </li>
        ))}

      </div>

    )
  }
}
