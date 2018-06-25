import React, {Component} from 'react'
import PropTypes from 'prop-types';
import Hero from './Hero'
import styles from './HeroesList.css'


class HeroesList extends Component {

    static propTypes = {
        heroes: PropTypes.array.isRequired
    };

    onDelete = (hero) => {
        this.props.onDelete(hero)
    };

    render() {
        const heroes = ([...this.props.heroes]);

        return (
            <div className={styles.listHolder}>
                <h3>HEROES LIST qnty: {heroes.length}</h3>
                <ul className={styles.list}>
                    {heroes.map(hero => (
                        <li key={hero.id} className={styles.listItem}>
                            <Hero {...hero} {...this.props} onDelete={this.onDelete}/>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}


export default HeroesList