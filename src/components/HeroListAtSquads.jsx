import React, {Component} from 'react'
import HeroAtSquad from './HeroAtSquad'
import Button from './shared/Button'
import styles from './HeroListAtSquads.css'

class HeroListAtSquads extends Component {
    handleDeleteSquadBtn = () => {
        console.log('handleDeleteSquadBtn clicked!!')
    };

    render() {
        const heroes = this.props.heroes;

        return (
            <div>
                <h3>HEROES LIST qnty: {heroes.length}</h3>
                <br></br>

                <div className={styles.statsHolder}>
                    <h4 className={styles.heroesStatsTitle}>Stats of Squad:</h4>
                    <p className={styles.statsHolderItem}>countTotalStrength: {this.props.countTotalStrength}</p>
                    <p className={styles.statsHolderItem}>
                        countTotalIntelligence: {this.props.countTotalIntelligence}</p>
                    <p className={styles.statsHolderItem}>countTotalSpeed: {this.props.countTotalSpeed}</p>
                </div>
                <br></br>

                <h4 className={styles.heroesNamesTitle}>Heroes Names:</h4>
                {heroes.map(heroe => (
                    <div key={heroe.id}>
                        <li key={heroe.id} className={styles.namesHolder}>
                            <HeroAtSquad name={heroe.name}/>
                        </li>
                    </div>
                ))}
                <div className={styles.deleteBtn}><Button text="Delete Squad" onClick={this.handleDeleteSquadBtn}/>
                </div>

            </div>
        )
    }
}

export default HeroListAtSquads;