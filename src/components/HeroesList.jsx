import React from 'react'
import Hero from './Hero'
import styles from './HeroesList.css'


const HeroesList = ({heroes, ...props}) => (
    <div className={styles.listHolder}>
        <h3>HEROES LIST qnty: {heroes.length}</h3>
        <ul className={styles.list}>
            {heroes.map(hero => (
                <li key={hero.id} className={styles.listItem}>
                    <Hero {...hero} {...props} />
                </li>
            ))}
        </ul>
    </div>

);
export default HeroesList