import React, {Component} from 'react'
import Hero from './HeroAtSquad'
import styles from './Squad.css'
//import PropTypes from 'prop-types'

export default class Squad extends Component {


    render() {
        //const heroes = this.props.heroes;
        const heroes = this.props.heroes;
        console.log(heroes, "heroes from Squad");
        console.log(heroes.map((curr, index) => {
            console.log(curr, "curr")
        }));

        return (
            <div className={styles.squadHolder}>
                {heroes.map(hero => (
                    <li key={hero.id}>
                        <Hero name={hero.name}/>
                    </li>
                ))}
            </div>
        )
    }

}
