import React, {Component} from 'react'
import PropTypes from 'prop-types'
import HeroAtSquad from './HeroAtSquad'
import styles from './HeroListAtSquads.css'


class HeroListAtSquads extends Component {
  heroes = this.props.heroes;

  render() {


    return (
      <div>
        <h3>HEROES LIST qnty: {this.heroes.length}</h3>
        <br/>

        <div className={styles.statsHolder}>
          <h4 className={styles.heroesStatsTitle}>Stats of Squad:</h4>
          <p className={styles.statsHolderItem}>countTotalStrength: {this.props.countTotalStrength}</p>
          <p className={styles.statsHolderItem}>
            countTotalIntelligence: {this.props.countTotalIntelligence}</p>
          <p className={styles.statsHolderItem}>countTotalSpeed: {this.props.countTotalSpeed}</p>
        </div>
        <br/>

        <h4 className={styles.heroesNamesTitle}>Heroes Names:</h4>
        {this.heroes.map(heroe => (
          <div key={heroe.id}>
            <li key={heroe.id} className={styles.namesHolder}>
              <HeroAtSquad name={heroe.name}/>
            </li>
          </div>
        ))}

      </div>
    )
  }
}

HeroListAtSquads.propTypes = {
  heroes: PropTypes.arrayOf().isRequired,
  countTotalStrength: PropTypes.func.isRequired,
  countTotalIntelligence: PropTypes.func.isRequired,
  countTotalSpeed: PropTypes.func.isRequired,
};

export default HeroListAtSquads;
