import React, {Component} from 'react'
import Squad from './Squad'
import styles from './SavedSquad.css'
//import {getHeroesBySquadEditorIds} from '../utils/selectors'


export default class SavedSquad extends Component {
    render() {
        /*        const squads = ([...this.props.squads]);
                const allHeroes = this.props.allHeroes;
                const heroes = getHeroesBySquadEditorIds(allHeroes,squads.heroesId);*/
        const squads = (this.props.squads);
        console.log(squads, "squads from SavedSquad");
        console.log(squads[0].heroes, "heroes from SavedSquad");
        const heroes = [...squads[0].heroes];
        return (
            <div className={styles.savedSquadHolder}>
                <h3 className={styles.title}>Saved Squads</h3>
                {squads.map((squad, index) => (
                    <ul className={styles.savedSquadList}>
                        <h3>Heroes</h3>
                        <li key={squads[index].id} className={styles.savedSquadItem}>
                            <Squad heroes={heroes}/>
                        </li>
                    </ul>

                ))}
            </div>
        );

    }
}


//SavedSquad.propTypes = {};
