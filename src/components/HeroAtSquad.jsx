import React from 'react'
import styles from './HeroAtSquad.css'
import PropTypes from 'prop-types'

const HeroAtSquad = ({name}) => (
    <span className={styles.heroNameHoldre}>{name}</span>
);

HeroAtSquad.propTypes = {
    name: PropTypes.string.isRequired,
};

export default HeroAtSquad