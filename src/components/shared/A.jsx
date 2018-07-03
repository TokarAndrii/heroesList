import React from 'react'
import PropTypes from 'prop-types'
import styles from './A.css'


const A = ({isActive, onClick, children}) => {
    const active = isActive ? styles.active : styles.notActive;
    //const isActive = this.props.isActiveSquad;
    return (
        <a onClick={onClick} className={active}>{children}</a>
    );
};


A.propTypes = {
    onClick: PropTypes.func.isRequired,
};

A.defaultProps = {
    isActive: true,
};


export default A