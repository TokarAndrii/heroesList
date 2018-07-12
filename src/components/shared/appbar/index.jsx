import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'

const AppBar = ({children}) => (<header className={styles.header}>{children}</header>);

AppBar.propTypes = {
  children: PropTypes.string,
};

AppBar.defaultProps = {
  children: "",
};

export default AppBar;
