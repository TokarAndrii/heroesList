import React, {Component} from 'react'
import PropTypes from 'prop-types';
import Modal from 'react-modal'
import styles from './Hero.css'
/*import HeroesUpdater from './HeroesUpdater'*/
import HeroesEditor from './HeroesEditor'


const INITIAL_STATE = {
    listDetailsShow: false,
    isModalOpen: false,

};

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        width: '250px'
    }
};

class Hero extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        strength: PropTypes.string.isRequired,
        intelligence: PropTypes.string.isRequired,
        speed: PropTypes.string.isRequired
    };


    state = {...INITIAL_STATE};

    handleOpenModal = () => this.setState({isModalOpen: true});

    handleCloseModal = () => this.setState({isModalOpen: false});


    toogleShowList = () => {
        this.setState(prevState => ({
            listDetailsShow: !prevState.listDetailsShow
        }));

    };

    handleDelete = () => {
        this.props.onDelete({...this.props});
    };

    handleUpdate = (heroe) => {
        this.props.onUpdate({...this.props});
        this.handleCloseModal();
    };



    render() {
        const {listDetailsShow, isModalOpen} = this.state;
        const {name, strength, intelligence, speed} = this.props;
/*
        const heroeId = {...this.props.id};
*/


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
                    <a className={styles.icon} onClick={this.handleOpenModal}><i className="fas fa-edit"></i></a>
                    <a className={styles.icon} onClick={this.handleDelete}><i className="fas fa-trash-alt"></i></a>
                    <a className={styles.icon}><i className="fas fa-users"></i></a>
                    <a className={styles.icon} onClick={this.toogleShowList}><i className="fas fa-info-circle"></i></a>
                </div>

                <Modal
                    isOpen={isModalOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.handleCloseModal}
                    style={customStyles}
                    contentLabel="Modal Window">

                   {/* <HeroesUpdater onFormSubmit={this.handleUpdate} buttonText="Update" title="Heroes update form"/>*/}
                    <HeroesEditor onFormSubmit={this.handleUpdate} buttonText="Update" title="Heroes update form" />

                    <button onClick={this.handleCloseModal} className={styles.closeBtn}>X</button>
                </Modal>
            </div>
        )
    }
}


export default Hero