import React, {Component} from 'react'
import PropTypes from 'prop-types';
import styles from './Hero.css'


/*const Hero = ({name, strength, intelligence, speed}) => {*/

const INITIAL_STATE = {
    listDetailsShow: false
};

class Hero extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        strength: PropTypes.string.isRequired,
        intelligence: PropTypes.string.isRequired,
        speed: PropTypes.string.isRequired
    };

    state = {...INITIAL_STATE};


    toogleShowList = () => {
        this.setState(prevState => ({
            listDetailsShow: !prevState.listDetailsShow
        }));

    };


    render() {
        const {listDetailsShow} = this.state;
        const {name, strength, intelligence, speed} = this.props;

        return (
            <div className={styles.hero}>
                <h3 className={styles.header}>{name}</h3>
                {listDetailsShow ? (
                    <ul className={styles.list}>
                        <li className={styles.listItem}>strength: <span
                            className={styles.listItemSpan}>{strength}</span></li>
                        <li className={styles.listItem}>intelligence: <span
                            className={styles.listItemSpan}>{intelligence}</span></li>
                        <li className={styles.listItem}>speed: <span className={styles.listItemSpan}>{speed}</span></li>
                    </ul>
                ) : null}


                <div className={styles.iconsHolder}>
                    <a className={styles.icon}><i class="fas fa-edit"></i></a>
                    <a className={styles.icon}><i class="fas fa-trash-alt"></i></a>
                    <a className={styles.icon}><i class="fas fa-users"></i></a>
                    <a className={styles.icon} onClick={this.toogleShowList}><i class="fas fa-info-circle"></i></a>
                </div>
            </div>

        )

    }
}


//};

export default Hero