import React, {Component} from 'react'
import styles from './Squad.css'
import HeroListAtSquads from './HeroListAtSquads'
//import PropTypes from 'prop-types'

export default class Squad extends Component {
    heroes = this.props.squad.heroes;

    countTotalStrength = () =>
        this.props.countTotalOfSquad(this.heroes,"strength");

    countTotalIntelligence = () =>
        this.props.countTotalOfSquad(this.heroes,"intelligence");


    countTotalSpeed = () =>
        this.props.countTotalOfSquad(this.heroes,"speed");


    render() {


        //const {countTotalStrength,countTotalSpeed,countTotalIntelligence} = this.props;
        const countTotalOfSquad = this.props;


        return (
            <div className={styles.squadHolder}>
                <HeroListAtSquads
                    heroes={this.heroes}
                    countTotalStrength={this.countTotalStrength()}
                    countTotalIntelligence={this.countTotalIntelligence()}
                    countTotalSpeed={this.countTotalSpeed()}
                />
            </div>
        )
    }

}

