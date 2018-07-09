import React from 'react'
import styles from './HeroAtSquad.css'

const HeroAtSquad = ({name}) => (
    <span className={styles.heroNameHoldre}>{name}</span>
);

export default HeroAtSquad