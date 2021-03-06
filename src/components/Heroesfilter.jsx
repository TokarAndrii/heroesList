import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styles from './Heroesfilter.css'

class Heroesfilter extends Component {

    static propTypes = {
        filter: PropTypes.string.isRequired,
        onFilterChange: PropTypes.func.isRequired,
    };

    handleChange = e => {
        this.props.onFilterChange(e.target.value);
    };

    render() {

        const {filter} = this.props;

        return (
            <form className={styles.formFilter}>
                <input placeholder="Filter heroes by content..." name="text" value={filter} onChange={this.handleChange} className={styles.inputFilter}/>
                <span className={styles.filterIcon}><i className="fas fa-filter" /></span>
            </form>
        )
    }

}

export default Heroesfilter
