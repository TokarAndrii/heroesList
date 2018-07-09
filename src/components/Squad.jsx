import React, {Component} from 'react'
import styles from './Squad.css'
import HeroListAtSquads from './HeroListAtSquads'
import Button from './shared/Button'
//import PropTypes from 'prop-types'

export default class Squad extends Component {
    heroes = this.props.squad.heroes;

    countTotalStrength = () =>
        this.props.countTotalOfSquad(this.heroes,"strength");

    countTotalIntelligence = () =>
        this.props.countTotalOfSquad(this.heroes,"intelligence");


    countTotalSpeed = () =>
        this.props.countTotalOfSquad(this.heroes,"speed");

    handleDeleteSquadBtn = ()=> {
      console.log('handleDeleteSquadBtn from Squad');
      return this.props.handleDeleteSquad;
    };


    render() {

        return (
            <div className={styles.squadHolder}>
                <HeroListAtSquads
                    heroes={this.heroes}
                    countTotalStrength={this.countTotalStrength()}
                    countTotalIntelligence={this.countTotalIntelligence()}
                    countTotalSpeed={this.countTotalSpeed()}
                />
                <Button text="Delete Squad" onClick={this.handleDeleteSquadBtn()}/>
            </div>
        )
    }

}

