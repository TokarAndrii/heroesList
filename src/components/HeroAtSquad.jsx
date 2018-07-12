import React from 'react'
import PropTypes from 'prop-types'
import styles from './HeroAtSquad.css'


const HeroAtSquad = ({name}) => (
    <span className={styles.heroNameHoldre}>{name}</span>
);

HeroAtSquad.propTypes = {
    name: PropTypes.string.isRequired,
};

export default HeroAtSquad
