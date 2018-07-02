import React from 'react'
import styles from './styles.css'

const AppBar = ({children}) => (<header className={styles.header}>{children}</header>);

export default AppBar;