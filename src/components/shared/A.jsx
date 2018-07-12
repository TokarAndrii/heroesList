import React from 'react'
import PropTypes from 'prop-types'
import styles from './A.css'


const A = ({isActive, onClick, children}) => {
  const active = isActive ? styles.active : styles.notActive;
  return (
    // eslint-disable-next-line
    <a onClick={onClick} className={active}>{children}</a>
  );
};


A.propTypes = {
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
  children: PropTypes.string,
};

A.defaultProps = {
  isActive: true,
  children: "",
};


export default A
