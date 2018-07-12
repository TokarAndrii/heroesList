import React, { Component } from 'react';
import Input from './shared/Input'
import Button from './shared/Button'
import styles from './HeroesUpdater.css'
import PropTypes from 'prop-types'

const INITIAL_STATE = {
    id: '',
    name: '',
    strength: '',
    intelligence: '',
    speed: '',
};

class HeroesUpdater extends Component {
    state = {...INITIAL_STATE};

    handleInputChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const heroe = {...this.state};

        const heroeId = this.props.id;

        heroe.id = heroeId;

        this.props.onFormSubmit(heroe);

        this.setState({ ...INITIAL_STATE });
    };

    static propTypes = {
        onFormSubmit: PropTypes.func.isRequired,
        buttonText: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        strength: PropTypes.string.isRequired,
        intelligence: PropTypes.string.isRequired,
        speed: PropTypes.string.isRequired,
    };


    render() {
        const {name, strength, intelligence, speed} = this.state;
        const {buttonText, title, } = this.props;
        return (
            <div className={styles.holder}>
                <h3>{title}</h3>
                <form className={styles.form} onSubmit={this.handleSubmit}>
                    <Input name="name" type="text" onChange={this.handleInputChange} placeholder="Enter heroe name..."
                           value={name}/>
                    <Input name="strength" type="text" onChange={this.handleInputChange}
                           placeholder="Enter heroe strength..."
                           value={strength}/>
                    <Input name="intelligence" type="text" onChange={this.handleInputChange}
                           placeholder="Enter heroe intelligence..."
                           value={intelligence}/>
                    <Input name="speed" type="text" onChange={this.handleInputChange} placeholder="Enter heroe speed..."
                           value={speed}/>
                    <Button text={buttonText} type="submit"/>
                </form>
            </div>
        )
    }
}

export default HeroesUpdater
