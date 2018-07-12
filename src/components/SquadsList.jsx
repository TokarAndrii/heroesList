import React, {Component} from 'react';
import Squad from './Squad'
import styles from './SquadsList.css'
import PropTypes from 'prop-types'

export default class SquadsList extends Component {
    countTotalOfSquad = (heroes, pattern) => {
        return  this.props.countTotalOfSquad;
    };
    handleDeleteSquad = (squad)=> {
        return this.props.handleDeleteSquad(squad);
    };

    static propTypes = {
        squads: PropTypes.array.isRequired,
        countTotalOfSquad: PropTypes.func.isRequired,
        handleDeleteSquad: PropTypes.func.isRequired,
    };


    render() {
        const squads = (this.props.squads);

        return (
            <div>
                {squads.map(current => (
                    <li key={current.id} className={styles.itemHolder}>
                        <Squad
                            squad={current}
                            className={styles.squad}
                            countTotalOfSquad={this.countTotalOfSquad()}
                            handleDeleteSquad={this.handleDeleteSquad}
                        />
                    </li>
                ))}

            </div>

        )
    }
}