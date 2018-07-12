import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styles from './SquadEditor.css'
import HeroesList from './HeroesList'
import Button from './shared/Button'
// eslint-disable-next-line
import {v4} from "uuid"


const INITIAL_STATE = {
  id: "",
  heroes: [],
};


class SquadEditor extends Component {

  static propTypes = {
    heroes: PropTypes.arrayOf().isRequired,
    onDelete: PropTypes.func.isRequired,
    countTotalStrength: PropTypes.func.isRequired,
    countTotalIntelligence: PropTypes.func.isRequired,
    countTotalSpeed: PropTypes.func.isRequired,
    handleClickResetBtn: PropTypes.func.isRequired,
    handleClickSaveBtn: PropTypes.func.isRequired,
  };

  onDelete = (hero) => this.props.onDelete(hero);

  countTotalStrength = () => this.props.countTotalStrength();

  countTotalIntelligence = () => this.props.countTotalIntelligence();

  countTotalSpeed = () => this.props.countTotalSpeed();

  handleClickSaveBtn = () => {
    const heroes = this.props.heroes;
    const squad = {...INITIAL_STATE, heroes, id: v4()};
    this.props.handleClickSaveBtn(squad);
    this.setState({...INITIAL_STATE});
    this.props.handleClickResetBtn();
  };

  handleClickResetBtn = () => {
    this.props.handleClickResetBtn();
  };




  render() {
    const heroes = [...this.props.heroes];
    return (
      <div className={styles.squadsEditorHolder}>
        <h3>Squad Editor</h3>
        <div className={styles.buttonHolder}>
          <Button text="Save Squad" onClick={this.handleClickSaveBtn}/>
          <Button text="Reset Squad" onClick={this.handleClickResetBtn}/>
        </div>
        <div className={styles.totalInfoHolder}>
          <div className={styles.totalInfoHolderRow}>Strength total: <span
            className={styles.totals}>{this.countTotalStrength()}</span>
          </div>
          <div className={styles.totalInfoHolderRow}>Intelligence total: <span
            className={styles.totals}>{this.countTotalIntelligence()}</span></div>
          <div className={styles.totalInfoHolderRow}>Speed total: <span
            className={styles.totals}>{this.countTotalSpeed()}</span>
          </div>
        </div>
        <HeroesList heroes={heroes} isActiveSquad={false} isActiveEdit={false} onDelete={this.onDelete}/>
      </div>)
  }
}

export default SquadEditor
