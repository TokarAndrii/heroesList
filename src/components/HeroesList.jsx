import React, {Component} from 'react'
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component'
import Hero from './Hero'
import styles from './HeroesList.css'


class HeroesList extends Component {

    static propTypes = {
        heroes: PropTypes.array.isRequired,
        onDelete: PropTypes.func.isRequired,
        onUpdate: PropTypes.func.isRequired,
    };

    onDelete = (hero) => {
        this.props.onDelete(hero)
    };

    onUpdate = (hero) => {
        this.props.onUpdate(hero)
    };

    render() {
        const heroes = ([...this.props.heroes]);


        return (
            <div>
                <h3>HEROES LIST qnty: {heroes.length}</h3>
                <Masonry className={styles.list} elementType={'ul'}>
                    {heroes.map(hero => (
                        <li key={hero.id} className={styles.listItem}>
                            <Hero {...hero} {...this.props} onDelete={this.onDelete} onUpdate={this.onUpdate}/>
                        </li>
                    ))}
                </Masonry>
            </div>

        )

        /*            <div className={styles.listHolder}>
            <h3>HEROES LIST qnty: {heroes.length}</h3>
                <ul className={styles.list}>
                {heroes.map(hero => (
                    <li key={hero.id} className={styles.listItem}>
                        <Hero {...hero} {...this.props} onDelete={this.onDelete} onUpdate={this.onUpdate}/>
                    </li>
                ))}
            </ul>
                </div>*/
    }
}


export default HeroesList