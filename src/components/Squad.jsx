import React, {Component} from 'react'
import Hero from './HeroAtSquad'
import styles from './Squad.css'
import HeroListAtSquads from './HeroListAtSquads'
//import PropTypes from 'prop-types'

export default class Squad extends Component {


    render() {
        //const heroes = this.props.heroes;
        const heroes = this.props.heroes;
        console.log(heroes, "heroes from Squad");
        const squad = this.props.squad;


        return (
            <div className={styles.squadHolder}>
                {heroes.map(hero => (
                    <li key={hero.id}>
                        <HeroListAtSquads/>
                    </li>
                ))}
            </div>
        )
    }

}

